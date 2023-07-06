import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchbook, getBooks, getError, getStatus,
} from '../redux/books/booksSlice';
import Deletebtn from './Deletebtn';

function BookList() {
  const dispatch = useDispatch();
  const books = useSelector(getBooks);
  const booksStatus = useSelector(getStatus);
  const booksError = useSelector(getError);

  useEffect(() => {
    dispatch(fetchbook());
  }, []);
  if (booksStatus === true) {
    return <div>Loading...</div>;
  }
  if (booksError !== '') {
    return <div>error fetcing</div>;
  }
  return (
    <div>
      {books.map((book) => (
        <ul key={book.item_id}>
          <li key={book.item_id}>{book.category || 'action'}</li>
          <li key={book.item_id}><span>{book.title}</span></li>
          <li key={book.item_id}><span>{book.author}</span></li>
          <li key={book.item_id}>
            <ul>
              <li>comments</li>
              <li key={book.item_id}>
                <Deletebtn id={book.item_id} />
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
