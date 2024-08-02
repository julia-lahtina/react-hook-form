import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { GetPostsArgs, GetPostsResponse } from './inctagram.types'


export const inctagramService = createApi({
  reducerPath: 'inctagramService',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://inctagram.work/api' }),
  endpoints: (builder) => ({
    getPublicPosts: builder.query<GetPostsResponse, GetPostsArgs>({
      query: ({pageSize}) => {
        return {
          url: 'v1/public-posts/all/',
          params: {
            pageSize,
            sortBy: 'createdAt',
            sortDirection: 'desc'
          }
        }
      },
    }),
  }),
})


export const { useGetPublicPostsQuery } = inctagramService