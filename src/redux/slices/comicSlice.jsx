import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { findComicById, getAllComics } from '../../custom/service/ComicService'


export const fetchAllComic = createAsyncThunk(
    'comic/fetchComics',
    async () => {     
        const res = await getAllComics();   
        return res
    }
)

export const fetchComicById = createAsyncThunk(
    'comic/fetchComicById',
    async (id) => {
        const res = await findComicById(id);
        return res;
    }
)


const initialState = {
    data: [],
    comicById: [],
    loading: false,
    error: null,
}

export const comicSlice = createSlice({
  name: 'comic',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    
    builder
    //allcomic
    .addCase(fetchAllComic.pending, (state, action) => {
        state.loading = true;
        state.error = null;
    })
    .addCase(fetchAllComic.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
    })
    .addCase(fetchAllComic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
    })

    //comicbyid
    .addCase(fetchComicById.pending, (state, action) => {
        state.loading = true;
        state.error = null;
    })
    .addCase(fetchComicById.fulfilled, (state, action) => {
        state.loading = false;
        state.comicById[action.meta.arg] = action.payload;
    })
    .addCase(fetchComicById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
    })

  },
})


export default comicSlice.reducer;