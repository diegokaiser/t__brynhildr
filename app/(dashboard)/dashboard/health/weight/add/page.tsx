'use client';

import React, { useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Message } from 'primereact/message';
import { Toast } from 'primereact/toast';
import { withAuth } from '@/hocs/withAuth';
import apis from '@/apis';
import { LoadingScreen } from '@/components/atoms';

type WeightForm = {
  unit: 'Kgs' | 'Lbs';
  amount: number;
  date: string;
};

const Add = () => {
  const router = useRouter();
  const toast = useRef<Toast>(null);

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WeightForm>({
    defaultValues: {
      unit: 'Kgs',
      amount: 0,
      date: new Date().toISOString().split('T')[0],
    },
  });

  const onSubmit = async (data: WeightForm) => {
    console.log('submit data', data);

    try {
      setLoading(true);
      const unitValue = data.unit === 'Kgs' ? 0 : 1;
      const value = data.amount;
      const date = data.date;

      await apis.weights.AddWeight(unitValue, value, date);

      toast.current?.show({
        severity: 'success',
        summary: 'Exito',
        detail: 'Regitro guardado correctamente',
        life: 2000,
      });

      reset();
      router.push('/dashboard/health/weight');
    } catch (error) {
      console.error(error);

      toast.current?.show({
        severity: 'error',
        summary: 'Error',
        detail: `${error}`,
        life: 2000,
      });

      setLoading(false);
    }
  };

  return (
    <>
      {loading && <LoadingScreen />}
      <div
        className="box-border flex flex-wrap justify-center"
        style={{ width: 'calc(100% + 28px)' }}
      >
        <div className="box-border m-0 pl-5 pt-5 basis-[100%] grow-0 max-w-[100%] lg:basis-[50%] lg:max-w-[50%] xl:basis-[58.333333%] xl:max-w-[58.333333%]">
          <div className="bg-white text-[#1d2630] shadow-none overflow-hidden relative border-1 border-solid border-[#dbe0e5a6] rounded-[12px]">
            <div className="flex items-center p-5">
              <div className="" style={{ flex: '1 1 auto' }}>
                <span className="m-0 text-xs font-semibold block">Agregar entrada</span>
              </div>
            </div>
            <hr className="border-[#dbe0e5a6]" />
            <form onSubmit={handleSubmit(onSubmit)} className="p-6">
              <h5 className="m-0 font-semibold text-sm mb-4" style={{ lineHeight: '1.5' }}>
                Datos
              </h5>
              <div
                className="box-border flex flex-wrap mt-[-24px] ml-[-24px] text-[#5b6b79]"
                style={{ width: 'calc(100% + 24px' }}
              >
                <div className="box-border m-0 basis-[100%] grow-0 min-w-[100%] pl-6 pt-6 lg:basis-[33%] lg:min-w-[33%]">
                  <div className="flex flex-col">
                    <label
                      htmlFor="unit"
                      className="text-xs font-light p-0 relative block whitespace-nowrap overflow-hidden max-w-[100%]"
                    >
                      Tipo de peso
                    </label>
                    <div className="inline-flex flex-col relative min-w-0 p-0 border-0 align-top w-full mb-2 mt-2">
                      <div className="box-border inline-flex w-full relative rounded-[8px] border border-solid border-[#bec8d0] h-12">
                        <select
                          id="unit"
                          className="border-0 box-border bg-none m-0 block min-w-0 w-full p-[14px]"
                          {...register('unit', { required: true })}
                        >
                          <option value="Kgs">Kgs.</option>
                          <option value="Lbs">Lbs.</option>
                        </select>
                      </div>
                    </div>
                    {errors.unit && (
                      <Message severity="error" text="Seleccione un tipo de medida" />
                    )}
                  </div>
                </div>
                <div className="box-border m-0 basis-[100%] grow-0 min-w-[100%] pl-6 pt-6 lg:basis-[33%] lg:min-w-[33%]">
                  <div className="flex flex-col">
                    <label
                      htmlFor="amount"
                      className="text-xs font-light p-0 relative block whitespace-nowrap overflow-hidden max-w-[100%]"
                    >
                      Cantidad
                    </label>
                    <div className="inline-flex flex-col relative min-w-0 p-0 border-0 align-top w-full mt-2">
                      <div className="box-border inline-flex w-full relative rounded-[8px] border border-solid border-[#bec8d0] h-12">
                        <input
                          id="amount"
                          type="text"
                          step="0.1"
                          className="border-0 box-border bg-none m-0 block min-w-0 w-full p-[14px]"
                          placeholder="Ej. 90.5"
                          autoComplete="off"
                          {...register('amount', { required: true, valueAsNumber: true })}
                        />
                      </div>
                    </div>
                    {errors.amount && <Message severity="error" text="Ingresa un valor válido" />}
                  </div>
                </div>
                <div className="box-border m-0 basis-[100%] grow-0 min-w-[100%] pl-6 pt-6 lg:basis-[33%] lg:min-w-[33%]">
                  <div className="flex flex-col">
                    <label
                      htmlFor="date"
                      className="text-xs font-light p-0 relative block whitespace-nowrap overflow-hidden max-w-[100%]"
                    >
                      Fecha
                    </label>
                    <div className="inline-flex flex-col relative min-w-0 p-0 border-0 align-top w-full mt-2">
                      <div className="box-border inline-flex w-full relative rounded-[8px] border border-solid border-[#bec8d0] h-12">
                        <input
                          id="date"
                          type="date"
                          className="border-0 box-border bg-none m-0 block min-w-0 w-full p-[14px]"
                          placeholder="Ej. 90.5"
                          {...register('date', { required: true })}
                        />
                      </div>
                    </div>
                    {errors.date && <Message severity="error" text="Selecciona una fecha" />}
                  </div>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div style={{ willChange: 'auto', transform: 'none' }}>
                  <button
                    type="submit"
                    className="inline-flex items-center relative box-border outline-0 border-0 m-0 cursor-pointer align-middle capitalize text-xs min-w-[64px] px-4 py-[6px] rounded-[8px] text-white bg-[#4680ff] shadow-nonw font-medium mt-6 mb-6 ml-2"
                    style={{ textDecoration: 'none', lineHeight: '1.75' }}
                    disabled={loading}
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toast ref={toast} />
    </>
  );
};

export default withAuth(Add);
