import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getUserById, getUserByUsername } from '../../custom/service/UserService'

export const fetchUserById =  createAsyncThunk(
    'user/fetchUserById',
    async () => {
        const res = await getUserById()
        return res;
    }
)

export const fetchUserByUsername =  createAsyncThunk(
    'user/fetchUserByUsername',
    async () => {
        const res = await getUserByUsername()
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
    ///

    .addCase(fetchUserByUsername.pending, (state, action) => {
        state.loading = true;
        state.error = null;
    })
    .addCase(fetchUserByUsername.fulfilled, (state, action) => {
        state.loading = false;
        state.userById = action.payload;
    })
    .addCase(fetchUserByUsername.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
    })
  },
})


export default UserSlice.reducer;