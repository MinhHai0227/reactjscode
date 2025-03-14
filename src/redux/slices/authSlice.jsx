import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { loginApi, RegisterApi } from '../../custom/service/AuthService'
import { toast } from 'react-toastify';

export const loginuser = createAsyncThunk(
    'auth/loginUser',
    async ({email, password},{rejectWithValue} ) => {     
        const res = await loginApi(email,password);
        if(res && res.access_token){              
            toast.success('Đăng nhập thành công');
            return res;
        }
        else if(res && res.status){
            toast.error(res.data.message);
            return rejectWithValue(res.data.message);
        }       
    }
)

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async ({username, email, password},{rejectWithValue}) => {       
        const res = await RegisterApi(username,email,password);
        if(res && res.email){
            toast.success('Đăng kí thành công')
            return res;
        }else if(res && res.status){
            toast.error(res.data.message)
            return rejectWithValue(res.data.message);
        }
    }
)

const initialState = {
    isLogin: !!localStorage.getItem("token"),
    data: null,
    loading: false,
    error: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
        state.isLogin = false;
        state.data = null;
        state.error = null;
        localStorage.removeItem("token")
    }
  },
  extraReducers: (builder) => {
    
    builder
    //login
    .addCase(loginuser.pending, (state, action) => {
        state.loading = true;
        state.error = null;
    })
    .addCase(loginuser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = false;
        state.isLogin = true;
        localStorage.setItem("token", action.payload.access_token);  
    })
    .addCase(loginuser.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
    })

    //register
    .addCase(registerUser.pending, (state, action) => {
        state.loading = true;
        state.error = null;
    })
    .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;  
        state.error = null;
    })
    .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Đăng ký thất bại!";;
    })
  },
})

export const {logout} = authSlice.actions;

export default authSlice.reducer;