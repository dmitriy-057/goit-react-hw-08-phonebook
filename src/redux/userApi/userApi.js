import { createApi } from '@reduxjs/toolkit/query/react';
import baseQuery from 'redux/baseQuery';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  tagTypes: ['User'],
  endpoints: builder => ({
    getCurrentUser: builder.query({
      query: () => ({
        url: '/users/current',
        method: 'GET',
        providesTags: ['User'],
      }),
      // async onQueryStarted(_, { getState }) {
      //   const token = getState().auth.token;
      //   console.log('getState', getState());
      //   console.log('token', token);
      //   if (token === null) {
      //     console.log('tokena net');
      //     return;
      //   }
      // },
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
        body: user,
      }),

      invalidatesTags: ['User'],
    }),
    userLogOut: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
      invalidatesTags: ['Login'],
    }),
  }),
});

export const {
  useGetCurrentUserQuery,
  useCreateUserMutation,
  useUserLogInMutation,
  useUserLogOutMutation,
} = userApi;

// async onQueryStarted(id, { dispatch, queryFulfilled }) {
//         // `onStart` side-effect
//         dispatch(messageCreated('Fetching post...'))
//         try {
//           const { data } = await queryFulfilled
//           // `onSuccess` side-effect
//           dispatch(messageCreated('Post received!'))
//         } catch (err) {
//           // `onError` side-effect
//           dispatch(messageCreated('Error fetching post!'))
//         }
//       }
