import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getUserById } from '../../custom/service/UserService'

export const fetchUserById =  createAsyncThunk(
    'user/fetchUserById',
    async () => {
        const res = await getUserById()
        return res;
    }
)



const initialState = {
    userById: [],
    loading: false,
    error: null,
}

export const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    
    builder
    
    .addCase(fetchUserById.pending, (state, action) => {
        state.loading = true;
        state.error = null;
    })
    .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.userById = action.payload;
    })
    .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
    })
  },
})


export default UserSlice.reducer;