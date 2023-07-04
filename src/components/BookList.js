import { useSelector } from 'react-redux';
import Deletebtn from './Deletebtn';

function BookList() {
  const { bookList } = useSelector((state) => state.books);
  return (
    <div>
      {bookList.map((book) => (
        <ul key={book.item_id}>
          <li key={book.item_id}>{book.category || ''}</li>
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
