import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchbook, getbook } from '../redux/books/booksSlice';

function BookList() {
  const books = useSelector(getbook);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchbook());
  }, []);
  if (!books || books.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {books.map((book) => (
        <ul key={book.item_id}>
          <li key={book.item_id}>{book.category || ''}</li>
          <li key={book.item_id}><span>{book.title}</span></li>
          <li key={book.item_id}>
            <ul>
              <li>comments</li>
              <li key={book.item_id}>
                {' '}
              </li>
              <li key={book.item_id}>Edit</li>
            </ul>
          </li>

        </ul>
      ))}
    </div>
  );
}

export default BookList;
