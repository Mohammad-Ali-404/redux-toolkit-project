import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTags } from "./TagsApi";

const initialState = {
    tags: [],
    isLoading: false,
    isError : false,
    error: ''
}
export const fetchTagsData = createAsyncThunk('Tags/fetchTags', 
    async () =>{
        const tags = await getTags()
        return tags;
    }
)
const tagsSlice = createSlice({
    name:"tags",
    initialState,
    extraReducers: (builder) =>{
        builder.
        addCase(fetchTagsData.pending, (state) =>{
            state.isError = false;
            state.isLoading = true;
        })
        .addCase(fetchTagsData.fulfilled, (state, action) =>{
            state.isLoading = false;
            state.tags = action.payload;
        })
        .addCase(fetchTagsData.rejected, (state, action) =>{
            state.isLoading = false;
            state.tags = [];
            state.isError = true;
            state.error = action.error?.message;

        })
    }
});

export default tagsSlice.reducer;