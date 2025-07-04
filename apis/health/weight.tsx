import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  setDoc,
  Timestamp,
  query,
  updateDoc,
  limit,
} from 'firebase/firestore';
import { auth } from '@/lib/firebase/firebase';
import { db } from '@/lib/firebase/firebase';

const weights = {
  GetWeights: async () => {
    const user = auth.currentUser;
    if (!user) throw new Error('Usuario no autenticado');

    const weightsRef = collection(db, 'dashboard', user.uid, 'health', 'default', 'weight');
    const q = query(weightsRef, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  },

  GetWeightsGroupedByMonth: async () => {
    const user = auth.currentUser;
    if (!user) throw new Error('Usuario no autenticado');

    const weightsRef = collection(db, 'dashboard', user.uid, 'health', 'default', 'weight');
    const q = query(weightsRef, orderBy('createdAt', 'asc'));
    const snapshot = await getDocs(q);

    const groups: Record<string, any[]> = {};

    snapshot.docs.forEach((docSnap) => {
      const data = docSnap.data();
      const createdAt = data.createdAt?.toDate?.() ?? new Date();
      const month = createdAt.getMonth() + 1;
      const monthString = month.toString().padStart(2, '0');

      if (!groups[monthString]) {
        groups[monthString] = [];
      }

      groups[monthString].push({
        id: docSnap.id,
        ...data,
      });
    });

    const result = Object.entries(groups).map(([mm, records]) => ({
      mm,
      records,
    }));

    return result;
  },

  GetLastWeights: async (count: number = 5) => {
    const user = auth.currentUser;
    if (!user) throw new Error('Usuario no autenticado');

    const weightsRef = collection(db, 'dashboard', user.uid, 'health', 'default', 'weight');
    const q = query(weightsRef, orderBy('createdAt', 'desc'), limit(count));
    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  },

  AddWeight: async (unit: number, value: number, date: string) => {
    const user = auth.currentUser;
    if (!user) throw new Error('Usuario no autenticado');

    const weightsRef = collection(db, 'dashboard', user.uid, 'health', 'default', 'weight');
    const newDoc = doc(weightsRef);
    const now = Timestamp.now();

    await setDoc(newDoc, {
      unit,
      value,
      createdAt: Timestamp.fromDate(new Date(date)),
      updatedAt: now,
    });
    return newDoc.id;
  },

  UpdateWeight: async (recordId: string, data: Partial<{ unit: number; value: number }>) => {
    const user = auth.currentUser;
    if (!user) throw new Error('Usuario no autenticado');

    const recordRef = doc(db, 'dashboard', user.uid, 'health', 'default', 'weight', recordId);
    await updateDoc(recordRef, {
      ...data,
      updateAt: Timestamp.now(),
    });
  },

  DeleteWeight: async (recordId: string) => {
    const user = auth.currentUser;
    if (!user) throw new Error('Usuario no autenticado');

    const recordRef = doc(db, 'dashboard', user.uid, 'health', 'default', 'weight', recordId);
    await deleteDoc(recordRef);
  },
};

export default weights;
