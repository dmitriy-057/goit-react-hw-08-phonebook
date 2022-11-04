import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseQuery = fetchBaseQuery({
  baseUrl: 'https://connections-api.herokuapp.com',
  prepareHeaders: (headers, { getState }) => {
    console.log('getState', getState());
    const token = getState().auth.token;

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  tagTypes: ['User'],
  endpoints: builder => ({
    getUser: builder.query({
      query: () => ({
        url: '/users/current',
        method: 'GET',
        providesTags: ['User'],
      }),
    }),
    createUser: builder.mutation({
      query: user => ({
        url: '/users/signup',
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['User'],
    }),
    userLogIn: builder.mutation({
      query: user => ({
        url: '/users/login',
        method: 'POST',
      }),
      invalidatesTags: ['User'],
    }),
    userLogOut: builder.mutation({
      query: user => ({
        url: '/users/logout',
        method: 'User',
      }),
      invalidatesTags: ['Login'],
    }),
  }),
});

export const {
  useGetUserQuery,
  useCreateUserMutation,
  useUserLogInMutation,
  useUserLogOutMutation,
} = userApi;
