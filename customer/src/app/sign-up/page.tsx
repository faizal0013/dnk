'use client';

import { useSignUpMutation } from '@/redux/api/auth/auth-api-slice';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { login } from '@/redux/features/auth-slice';
import { AppDispatch } from '@/redux/store';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';

export default function SignUpPage(): JSX.Element {
  const {
    handleSubmit,
    watch,
    setError,
    clearErrors,
    control,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch<AppDispatch>();

  const [signUp] = useSignUpMutation();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    const response = await signUp(data);
    if ('data' in response) {
      const { data } = response;

      dispatch(login(data));
      router.replace('/');
    }

    if ('error' in response) {
      const erroData = (response.error as FetchBaseQueryError).data as Object;

      if (typeof erroData == 'object') {
        for (const [k, v] of Object.entries(erroData)) {
          setError(k, {
            message: v,
          });
        }
      }
    }
  };

  const password = watch('password', '');
  const confirmPassword = watch('confirm-password', '');

  useEffect(() => {
    // watch

    if (password !== confirmPassword) {
      setError('confirm-password', {
        type: 'validate',
        message: "Passwords don't match",
      });

      return;
    }

    clearErrors('confirm-password');
  }, [password, confirmPassword]);

  return (
    <>
      <div className="flex mx-[10rem] bg-white flex-row justify-center">
        <Image src="/assets/images/login-sticker.svg" alt="" width={100} height={100} className="w-[32rem]" />
        <div className="my-[4rem] mx-[6rem]">
          <h3 className="text-4xl text-center">DNK</h3>
          <p className="text-2xl my-4">Create An Account</p>
          <div className="w-96">
            <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col my-4">
                <label htmlFor="full-name" className="mb-2">
                  Full Name
                </label>
                <Controller
                  name="full_name"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      type="text"
                      id="full-name"
                      required
                      {...field}
                      className="border border-black py-[0.5rem] rounded-xl px-4"
                    />
                  )}
                />
                {errors?.full_name && <p className="mt-2 text-red-500">{`${errors.full_name?.message}`}</p>}
              </div>
              <div className="flex flex-col my-4">
                <label htmlFor="phone" className="mb-2">
                  Phone Number
                </label>
                <Controller
                  name="phone"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      type="tel"
                      id="phone"
                      required
                      {...field}
                      className="border border-black py-[0.5rem] rounded-xl px-4"
                    />
                  )}
                />
                {errors?.phone && <p className="mt-2 text-red-500">{`${errors.phone?.message}`}</p>}
              </div>
              <div className="flex flex-col my-4">
                <label htmlFor="email" className="mb-2">
                  Email
                </label>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      type="email"
                      id="email"
                      required
                      {...field}
                      className="border border-black py-[0.5rem] rounded-xl px-4"
                    />
                  )}
                />
                {errors?.email && <p className="mt-2 text-red-500">{`${errors.email?.message}`}</p>}
              </div>
              <div className="flex flex-col my-4">
                <label htmlFor="password" className="mb-2">
                  Password
                </label>
                <Controller
                  name="password"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      type="password"
                      id="password"
                      required
                      {...field}
                      className="border border-black py-[0.5rem] rounded-xl px-4"
                    />
                  )}
                />
                {errors?.password && <p className="mt-2 text-red-500">{`${errors.password?.message}`}</p>}
              </div>
              <div className="flex flex-col my-4">
                <label htmlFor="confirm-password" className="mb-2">
                  Confirm Password
                </label>
                <Controller
                  name="confirm-password"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <input
                      type="password"
                      id="confirm-password"
                      required
                      {...field}
                      className="border border-black py-[0.5rem] rounded-xl px-4"
                    />
                  )}
                />
                {errors?.['confirm-password'] && (
                  <p className="mt-2 text-red-500">{`${errors['confirm-password']?.message}`}</p>
                )}
              </div>
              <button type="submit" className="w-full bg-blue-500 p-4 rounded-lg text-white font-bold">
                Register
              </button>
            </form>
            <div className="my-4">
              <p className="text-sm">
                Already has an account?{' '}
                <Link href="login" className="text-blue-600">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
