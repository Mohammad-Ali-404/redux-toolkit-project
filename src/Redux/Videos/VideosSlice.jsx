import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./VideosApi";

const initialState = {
    videos: [],
    isLoading: false,
    isError : false,
    error: ''
}
export const fetchVideosData = createAsyncThunk('videos/fetchVideos', 
    async () =>{
        const videos = await getVideos()
        return videos;
    }
)
const videoSlice = createSlice({
    name:"videos",
    initialState,
    extraReducers: (builder) =>{
        builder.
        addCase(fetchVideosData.pending, (state) =>{
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(fetchVideosData.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.videos = action.payload;
        })
        .addCase(fetchVideosData.rejected, (state, action) =>{
            state.isLoading = false;
            state.videos = [];
            state.isError = true;
            state.error = action.error?.message;

        })
    }
});

export default videoSlice.reducer;