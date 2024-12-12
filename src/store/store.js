import { configureStore } from "@reduxjs/toolkit";
import catMemeReducer from "../slice/catMemeSlice.js"

export const store = configureStore({
    reducer: {
        catMeme: catMemeReducer,
    }
})