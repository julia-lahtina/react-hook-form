import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GetPostsResponse } from './inctagram.types'


export const inctagramService = createApi({
  reducerPath: 'inctagramService',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://inctagram.work/api' }),
  endpoints: (builder) => ({
    getPublicPosts: builder.query<GetPostsResponse, void>({
      query: () => `v1/public-posts/all`,
    }),
  }),
})


export const { useGetPublicPostsQuery } = inctagramService