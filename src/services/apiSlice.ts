import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../types';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({
      query: () => 'products',
    }),
    getProductById: builder.query<Product, number>({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductByIdQuery } = apiSlice;
