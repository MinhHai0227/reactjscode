import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllCate, getComicByCate } from '../../custom/service/CateService'

export const fetchAllCate = createAsyncThunk(
  'category/fetchCategories',
  async () => {
    const res = await getAllCate();
    return res;
  }
)

export const fetchComicByCate = createAsyncThunk(
  'categories/fetchComicByCate',
  async (cate_id) => {
    const res = await getComicByCate(cate_id)
    return res;
  }
)


const initialState = {
    listCata: [],
    comicBycate: {},
    isLoading: false,
    isError: null
}

export const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    
    builder
    //fetchAllCategories
    .addCase(fetchAllCate.pending, (state, action) => {
        state.isLoading = true;
    })
    .addCase(fetchAllCate.fulfilled, (state, action) => {
      state.isLoading= false;
      state.listCata = action.payload;
    })
    .addCase(fetchAllCate.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    })

    //register
    .addCase(fetchComicByCate.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(fetchComicByCate.fulfilled, (state, action) => {
      state.isLoading = false;
      state.comicBycate[action.meta.arg] = action.payload;
    })
    .addCase(fetchComicByCate.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message
    })
  },
})



export default categorySlice.reducer;