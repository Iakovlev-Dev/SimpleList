import { configureStore } from "@reduxjs/toolkit";
import { postApi } from "./post-api";

export const storeQuery = configureStore({
    reducer: {
        [postApi.reducerPath]: postApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware)
})