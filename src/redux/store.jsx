import { configureStore } from '@reduxjs/toolkit'
import  authReducer  from './slices/authSlice'
import categoryReducer from './slices/categorySlice'
import comicReducer from './slices/comicSlice'
import  ChapterReducer  from './slices/chapterSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    category: categoryReducer,
    comic: comicReducer,
    chapter: ChapterReducer,
  },
  devTools: true,
})