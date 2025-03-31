import { configureStore } from '@reduxjs/toolkit'
import  authReducer  from './slices/authSlice'
import categoryReducer from './slices/categorySlice'
import comicReducer from './slices/comicSlice'
import  ChapterReducer  from './slices/chapterSlice'
import UserReducer from './slices/userSlice'
import  countriesReducer  from './slices/countriesSlide'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    comic: comicReducer,
    chapter: ChapterReducer,
    user: UserReducer,
    country: countriesReducer
  },
  devTools: true,
})