import { apiSlice } from '../';

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    signUp: builder.mutation({
      query: data => ({
        url: 'regiser/',
        method: 'POST',
        body: data,
      }),
    }),
    login: builder.mutation({
      query: data => ({
        url: 'login/',
        body: data,
        method: 'POST',
      }),
    }),
  }),
});

export const { useSignUpMutation, useLoginMutation } = authApiSlice;
