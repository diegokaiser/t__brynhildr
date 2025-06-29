'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { useAuth } from '@/hooks/useAuth';
import { Loader } from '@/components/atoms';

type RegisterFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

function calculatePasswordStreng(password: string) {
  const hasLetters = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasSymbols = /[^a-zA-Z0-9]/.test(password);

  if (hasLetters && !hasNumbers && !hasUppercase && !hasSymbols) {
    return {
      label: 'Muy Débil',
      color: 'bg-red-600',
    };
  }
  if (hasLetters && hasNumbers && !hasUppercase && !hasSymbols) {
    return {
      label: 'Débil',
      color: 'bg-orange-400',
    };
  }
  if (hasLetters && hasNumbers && hasUppercase && !hasSymbols) {
    return {
      label: 'Normal',
      color: 'bg-yellow-500',
    };
  }
  if (hasLetters && hasNumbers && hasUppercase && hasSymbols) {
    return {
      label: 'Fuerte',
      color: 'bg-green-500',
    };
  }

  return { label: '', color: '' };
}

const Register = () => {
  const { signUpWithEmail, loading } = useAuth('/dashboard', '/login', ['/register']);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormValues>();

  const passwordValue = watch('password', '');
  const confirmPasswordValue = watch('confirmPassword', '');
  const firstNameValue = watch('firstName', '');
  const lastNameValue = watch('lastName', '');

  const passwordStrength = calculatePasswordStreng(passwordValue);

  const isDisabled =
    !firstNameValue ||
    !lastNameValue ||
    !passwordValue ||
    !confirmPasswordValue ||
    passwordValue !== confirmPasswordValue;

  const onSubmit = async (data: RegisterFormValues) => {
    if (data.password !== data.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      await signUpWithEmail(data.email, data.password);
    } catch (err: any) {
      console.error(err);
      setError(err.message);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="m-6 max-w-[540px]">
      <div className="p-10">
        <div className="box-border flex flex-row flex-wrap w-full">
          <div className="pt-6 sm:basis-full flex-grow-0 max-w-full">
            <div className="align-baseline flex flex-row justify-between">
              <h3 className="m-0 font-semibold leading-6 text-2xl ">Crear cuenta</h3>
              <Link className="text-blue-600" href="/login">
                Identificarse
              </Link>
            </div>
          </div>
          <div className="pt-6 sm:basis-full flex-grow-0 max-w-full">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
              <div className="box-border flex flex-row flex-wrap">
                <div className="box-border m-0 pt-6 lg:basis-full lg:flex-grow-0 lg:max-w-full">
                  <div className="flex gap-x-6 justify-between">
                    <div className="flex flex-col gap-y-2 w-6/12">
                      <label htmlFor="firstName">Nombre</label>
                      <InputText
                        aria-describedby="firstName-help"
                        id="firstName"
                        placeholder="Nombre"
                        type="text"
                        {...register('firstName', { required: 'Este campo es obligatorio' })}
                      />
                      {errors.firstName && (
                        <span className="text-red-500">{errors.firstName.message}</span>
                      )}
                    </div>
                    <div className="flex flex-col gap-y-2 w-6/12">
                      <label htmlFor="lastName">Apellidos</label>
                      <InputText
                        aria-describedby="lastName-help"
                        id="lastName"
                        placeholder="Apellidos"
                        type="text"
                        {...register('lastName', { required: 'Este campo es obligatorio' })}
                      />
                      {errors.lastName && (
                        <span className="text-red-500">{errors.lastName.message}</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="box-border m-0 pt-6 lg:basis-full lg:flex-grow-0 lg:max-w-full">
                  <div className="flex flex-col gap-y-2">
                    <label className="text-gray-500" htmlFor="password">
                      Password
                    </label>
                    <InputText
                      aria-describedby="password-help"
                      id="password"
                      placeholder="*******"
                      type="password"
                      {...register('password', { required: 'Este campo es obligatorio' })}
                    />
                    {errors.password && (
                      <span className="text-red-500">{errors.password.message}</span>
                    )}
                  </div>
                </div>
                <div className="box-border m-0 pt-6 lg:basis-full lg:flex-grow-0 lg:max-w-full">
                  <div className="flex flex-col gap-y-2">
                    <label className="text-gray-500" htmlFor="confirmPassword">
                      Confirmar password
                    </label>
                    <InputText
                      aria-describedby="confirmPassword-help"
                      id="confirmPassword"
                      placeholder="*******"
                      type="password"
                      {...register('confirmPassword', { required: 'Este campo es obligatorio' })}
                    />
                    {errors.confirmPassword && (
                      <span className="text-red-500">{errors.confirmPassword.message}</span>
                    )}
                  </div>
                </div>
                <div className="box-border m-0 pt-6 lg:basis-full lg:flex-grow-0 lg:max-w-full">
                  <div className="flex gap-x-3 items-center">
                    <span className={`w-30 h-3 rounded-full ${passwordStrength.color}`}></span>
                    <span className="font-semibold text-xs">{passwordStrength.label}</span>
                  </div>
                </div>
                <div className="box-border m-0 pt-6 lg:basis-full lg:flex-grow-0 lg:max-w-full">
                  <Button
                    className="w-full"
                    label="Crear cuenta"
                    type="submit"
                    disabled={isDisabled}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
