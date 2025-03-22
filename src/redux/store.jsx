import { configureStore } from '@reduxjs/toolkit'
import  authReducer  from './slices/authSlice'
import categoryReducer from './slices/categorySlice'
import comicReducer from './slices/comicSlice'
import  ChapterReducer  from './slices/chapterSlice'
import UserReducer from './slices/userSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    comic: comicReducer,
    chapter: ChapterReducer,
    user: UserReducer,
  },
  devTools: true,
})