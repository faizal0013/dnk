import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './interceptor';

export const apiSlice = createApi({
  baseQuery: baseQuery,
  endpoints: () => ({}),
});

export const { endpoints } = apiSlice;
