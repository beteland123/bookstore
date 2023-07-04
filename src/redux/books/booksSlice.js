import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookList: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};
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
  },

});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
