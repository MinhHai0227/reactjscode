import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { findChapterByComicId, getAllContentChapterByChapterSlug } from '../../custom/service/ChapterService';
import { unlockChapter } from '../../custom/service/ChapterUnlockService';

// Thunk để fetch dữ liệu chapter theo comicId
export const fetchChapterBycomicId = createAsyncThunk(
  'chapter/fetchchapterByComicId',
  async (id) => {
    const res = await findChapterByComicId(id);
    return res;
  }
);

// Thunk để fetch dữ liệu chapter theo slug
export const fetchChapterBySlug = createAsyncThunk(
    'chapter/fetchChapterBySlug',
    async (slug, { rejectWithValue }) => {
      try {
        // Gọi hàm axios đã viết trước đó
        const response = await getAllContentChapterByChapterSlug(slug);
  
        // Kiểm tra xem dữ liệu trả về có hợp lệ không
        if (response && response.data) {
          return response.data;  // Nếu có dữ liệu hợp lệ, trả về dữ liệu
        }
        throw new Error('Không có dữ liệu trả về từ API');  // Nếu không có dữ liệu
      } catch (error) {
        // Nếu có lỗi xảy ra, trả về thông báo lỗi để redux xử lý
        return rejectWithValue(error.message || 'Lỗi không xác định');
      }
    }
  );

// Thunk để unlock chapter
export const Unlockchapter = createAsyncThunk(
  'unlock/unlockChapter',
  async (chapterId) => {
    const res = await unlockChapter(chapterId);
    return res;
  }
);

const initialState = {
  chapterByComicId: [],
  chapterBySlug: null, // Thêm một trường để lưu chapter từ slug
  loading: false,
  error: null,
};

export const ChapterSlice = createSlice({
  name: 'chapter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchChapterBycomicId
      .addCase(fetchChapterBycomicId.pending, (state) => {
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

      // fetchChapterBySlug
      .addCase(fetchChapterBySlug.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchChapterBySlug.fulfilled, (state, action) => {
        state.loading = false;
        state.chapterBySlug = { ...state.chapterBySlug, [action.payload.slug]: action.payload };
      })
      .addCase(fetchChapterBySlug.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Unlock
      .addCase(Unlockchapter.pending, (state) => {
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
      });
  },
});

export default ChapterSlice.reducer;
