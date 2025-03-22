import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { findChapterByComicId } from '../../custom/service/ChapterService';
import { unlockChapter } from '../../custom/service/ChapterUnlockService';

export const fetchChapterBycomicId = createAsyncThunk(
    'chapter/fetchchapterByComicId',
    async (id) => {
        const res = await findChapterByComicId(id);
        return res;
    }
)

export const Unlockchapter = createAsyncThunk(
    'unlock/unloclChapter',
    async (chapterId) => {
        const res = await unlockChapter(chapterId)
        return res
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
    //fetchChapterBycomicId
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

    //Unlock
    .addCase(Unlockchapter.pending, (state, action) => {
        state.loading = true;
        state.error = null;
    })
    .addCase(Unlockchapter.fulfilled, (state, action) => {
        state.loading = false;
        state.chapterByComicId[action.meta.arg] = action.payload;
        state.error = null;
    })
    .addCase(Unlockchapter.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
    })
    
  },
})


export default ChapterSlice.reducer;