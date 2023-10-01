'use client';

import { useLoginMutation } from '@/redux/api/auth/auth-api-slice';
import { login } from '@/redux/features/auth-slice';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

export default function LoginPage(): JSX.Element {
  const {
    control,
    setError,
    clearErrors,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const router = useRouter();

  const [loginApi] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = async (data: any) => {
    const response = await loginApi(data);

    if ('data' in response) {
      const {
        data: { data },
      } = response;

      dispatch(login(data));

      router.replace('/');
    }

    if ('error' in response) {
      console.log(response.error);
      if (response.error) {
        setError('invalid', {
          message: 'Invalid email or password.',
        });
      }
    }
  };

  return (
    <div className="flex mx-[10rem] bg-white flex-row justify-center">
      <Image src="/assets/images/login-sticker.svg" alt="" width={100} height={100} className="w-[32rem]" />
      <div className="my-[4rem] mx-[6rem]">
        <h3 className="text-4xl">Hello! Welcome back.</h3>
        <p className="text-2xl">Login to continue</p>
        {errors?.invalid && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-6" role="alert">
            <span className="block sm:inline">{`${errors?.invalid?.message}`}</span>
            <span
              className="absolute top-0 bottom-0 right-0 px-4 py-3"
              onClick={() => {
                clearErrors('invalid');
              }}
            >
              <svg
                className="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
        )}
        <div className="w-96">
          <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col my-4">
              <label htmlFor="email" className="mb-2">
                Email
              </label>
              <Controller
                control={control}
                name="email"
                defaultValue={''}
                render={({ field }) => (
                  <input
                    type="email"
                    {...field}
                    id="email"
                    className="border border-black py-[0.5rem] rounded-xl px-4"
                  />
                )}
              />
            </div>
            <div className="flex flex-col my-4">
              <label htmlFor="password" className="mb-2">
                Password
              </label>
              <Controller
                control={control}
                name="password"
                defaultValue={''}
                render={({ field }) => (
                  <input
                    type="password"
                    {...field}
                    id="password"
                    className="border border-black py-[0.5rem] rounded-xl px-4"
                  />
                )}
              />
            </div>
            <div className="text-end mb-4">
              <Link href="/" className="text-xs text-blue-600">
                Forgot Password
              </Link>
            </div>
            <button type="submit" className="w-full bg-blue-500 p-4 rounded-lg text-white font-bold">
              Login
            </button>
          </form>
          <div className="my-4">
            <p className="text-sm">
              Don't have an account?{' '}
              <Link href="sign-up" className="text-blue-600">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
