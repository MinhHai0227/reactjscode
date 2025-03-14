import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { findChapterByComicId } from '../../custom/service/ChapterService';

export const fetchChapterBycomicId = createAsyncThunk(
    'chapter/fetchchapterByComicId',
    async (id) => {
        const res = await findChapterByComicId(id);
        return res;
    }
)


const initialState = {
    chapterByComicId: [],
    loading: false,
    error: null,
}

export const ChapterSlice = createSlice({
  name: 'chapter',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    
    builder
    
    .addCase(fetchChapterBycomicId.pending, (state, action) => {
        state.loading = true;
        state.error = null;
    })
    .addCase(fetchChapterBycomicId.fulfilled, (state, action) => {
        state.loading = false;
        state.chapterByComicId[action.meta.arg] = action.payload;
    })
    .addCase(fetchChapterBycomicId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
    })
  },
})


export default ChapterSlice.reducer;