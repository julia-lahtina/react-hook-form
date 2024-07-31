import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const inctagramService = createApi({
  reducerPath: 'inctagramService',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://inctagram.work/api' }),
  endpoints: (builder) => ({
    getPublicPosts: builder.query<any, void>({
      query: () => `v1/public-posts/all`,
    }),
  }),
})


export const { useGetPublicPostsQuery } = inctagramService