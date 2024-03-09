import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "./Videos/VideosSlice";
import tagsReducer from "./Tags/TagsSilce";

export const store = configureStore({
    reducer:{
        videos: videosReducer,
        tags: tagsReducer
    }
});
