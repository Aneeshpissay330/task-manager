import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ForgotPassword, LoginUser, RegisterUser, ResetPassword } from '../../types/auth';
import { type RootState } from '../../app/store'; // adjust if your store is in a different path
import { API } from '../../api';

export const authAPI = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API}/auth/`,
    prepareHeaders: (headers, { endpoint, getState }) => {
      const token = (getState() as RootState).user.token;
      const protectedEndpoints = ['verifyEmail', 'resetPassword'];

      if (token && protectedEndpoints.includes(endpoint)) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<{ message: string }, RegisterUser>({
      query: (user) => ({
        url: 'register',
        method: 'POST',
        body: user,
      }),
    }),
    verifyEmail: builder.mutation<{ message: string }, void>({
      query: () => ({
        url: 'verify',
        method: 'GET',
      }),
    }),
    loginUser: builder.mutation<{ message: string; token: string }, LoginUser>({
      query: (data) => ({
        url: 'login',
        method: 'POST',
        body: data,
      }),
    }),
    forgotPassword: builder.mutation<{ message: string }, ForgotPassword>({
      query: (data) => ({
        url: 'forgot-password',
        method: 'POST',
        body: data,
      }),
    }),
    resetPassword: builder.mutation<{ message: string }, ResetPassword>({
      query: (data) => ({
        url: 'reset-password',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useVerifyEmailMutation,
  useLoginUserMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authAPI;
