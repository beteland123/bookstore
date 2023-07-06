import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/DAfKo46JlxdDICeUAY03/books';
const initialState = {
  books: [],
  status: false,
  error: '',
};

export const fetchbook = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(
      url,
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
});

export const addBook = createAsyncThunk('book/addBook', async (newbook) => {
  try {
    await axios.post(url, newbook);
    return newbook;
  } catch (error) {
    return error.message;
  }
});

export const removeBook = createAsyncThunk('book/removeBook', async (id) => {
  try {
    await axios.delete(`${url}/${id}`);
    return id;
  } catch (error) {
    return error.message;
  }
});

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchbook.pending, (state) => {
      state.status = true;
    });
    builder.addCase(fetchbook.fulfilled, (state, action) => {
      state.status = false;
      const Books = action.payload;
      const eachbook = Object.keys(Books).map((itemId) => ({
        item_id: itemId,
        title: Books[itemId][0].title,
        author: Books[itemId][0].author,
        category: Books[itemId][0].category,
      }
      ));
      state.books = eachbook;
    });
    builder.addCase(fetchbook.rejected, (state, action) => {
      state.status = false;
      state.error = action.error.message;
    });
    builder.addCase(addBook.fulfilled, (state, action) => {
      state.books.push(action.payload);
    });
    builder.addCase(removeBook.fulfilled, (state, action) => {
      const filteredBook = state.books.filter(
        (book) => book.item_id !== action.payload,
      );
      state.books = filteredBook;
    });
  },
});
export const getBooks = (state) => state.books.books;
export const getStatus = (state) => state.books.status;
export const getError = (state) => state.books.error;

export default bookSlice.reducer;
