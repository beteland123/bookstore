import { createSlice } from '@reduxjs/toolkit';

const initialState = { bookList: [] };
const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.bookList = state.bookList.filter((book) => book.id !== bookId);
    },
    addBook: (state, action) => {
      state.bookList.push(action.payload);
    },
  },

});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
