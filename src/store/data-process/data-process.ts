import { createSlice } from "@reduxjs/toolkit";
import { NameSpace } from "../../const";
import { TPostArray } from "../../types/type-post";
import { fetchPostsAction } from "../api-actions";

type TDataProcessState = {
    posts: TPostArray | null
}

const initialState: TDataProcessState = {
    posts: null
}

export const dataProcess = createSlice({
    name: NameSpace.Post,
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchPostsAction.fulfilled, (state, action) => {
                state.posts = action.payload
            })
    },
})