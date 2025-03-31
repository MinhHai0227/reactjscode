import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllCountries } from '../../custom/service/CountriService';


export const fetchAllCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    const res = await getAllCountries();
    return res;
  }
)


const initialState = {
    listCountries: [],
    isLoading: false,
    isError: null
}

export const countrieSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    
    builder
    //fetchAllCategories
    .addCase(fetchAllCountries.pending, (state, action) => {
        state.isLoading = true;
    })
    .addCase(fetchAllCountries.fulfilled, (state, action) => {
      state.isLoading= false;
      state.listCountries = action.payload;
    })
    .addCase(fetchAllCountries.rejected, (state, action) => {
        satisfies.isLoading = false;
        state.isError = action.error.message;
    })

  },
})



export default countrieSlice.reducer;