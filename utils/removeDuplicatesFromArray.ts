export function uniqueArray<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

/**
 * uniqueArray([1, 2, 3, 3, 4, 4, 5])
 */