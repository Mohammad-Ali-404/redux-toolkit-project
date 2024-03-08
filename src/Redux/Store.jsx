import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "./Videos/VideosSlice";

export const store = configureStore({
    reducer:{
        videos: videosReducer
    }
});
