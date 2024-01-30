import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {  NameSpace } from "../const";
import { TPost, TPostArray } from "../types/type-post";

const BASE_URL = 'https://jsonplaceholder.typicode.com'

export const postApi = createApi({
    reducerPath: NameSpace.Post,
    baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
    endpoints: (builder) => ({
        fetchPosts: builder.query<TPostArray, undefined>({
            query: ()=> ({
                url: `/posts`,
            }),
        }),
        fetchPostById: builder.query<TPost, number>({
            query: (id: number) => ({
                url: `/posts/${id}`
            })
        })
    })
})

export const { useFetchPostsQuery, useFetchPostByIdQuery } = postApi;