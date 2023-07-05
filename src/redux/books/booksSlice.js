import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/DAfKo46JlxdDICeUAY03/books';
const initialState = {
  bookList: [],
};
export const fetchbook = createAsyncThunk('book/fetchbook', async (thunkAPI) => {
  try {
    const result = await axios(url);
    return result.data.books;
  } catch (error) {
    return thunkAPI.rejectWithValue('somwthing went wrong..', error);
  }
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.bookList = state.bookList.filter((book) => book.item_id !== bookId);
    },
    addBook: (state, action) => {
      state.bookList.push(action.payload);
    },
    extraReducers(builder) {
      builder
        .addCase(fetchbook.fulfilled, (state, action) => {
          state.bookList = action.payload;
        });
    },
  },

});

export const { addBook, removeBook } = bookSlice.actions;
export const getbook = (state) => state.book;
export default bookSlice.reducer;
