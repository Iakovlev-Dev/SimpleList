import { AxiosInstance } from "axios"
import { TAppDispatch, TState } from "../types/type-store"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { TPostArray } from "../types/type-post"
import { APIRoute } from "../const"

type TAPIAction = {
    dispatch: TAppDispatch,
    store: TState,
    extra: AxiosInstance
}

export const fetchPostsAction = createAsyncThunk<TPostArray, undefined, TAPIAction>('fetchPost', 
    async (_arg, {extra: api}) => {
        const {data} = await api.get<TPostArray>(APIRoute.Post)   
        return data
    }
    )