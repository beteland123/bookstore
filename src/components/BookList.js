import PropTypes from 'prop-types';
import Deletebtn from './Deletebtn';

function BookList({ books, deltBook }) {
  return (
    <div>
      {books.map((book) => (
        <ul key={book.id}>
          <li key={`${book.id}-category`}>{book.catagory || ''}</li>
          <li key={`${book.id}-bookName`}><span>{book.bookName}</span></li>
          <li key={`${book.id}-author`}><span>{book.author}</span></li>
          <li key={`${book.id}-actions`}>
            <ul>
              <li>comments</li>
              <li key={`${book.id}-remove`}>
                <Deletebtn bookId={book.id} deltBook={deltBook} />
                {' '}
              </li>
              <li key={`${book.id}-edit`}>Edit</li>
            </ul>
          </li>
          <li key={`${book.id}-progress`}><span>{book.progress}</span></li>
          <li key={`${book.id}-currentChapter`}><span>{book.currentChapter}</span></li>
        </ul>
      ))}
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      bookName: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      currentChapter: PropTypes.string.isRequired,
      progress: PropTypes.string.isRequired,
      catagory: PropTypes.string,
    }),
  ).isRequired,
  deltBook: PropTypes.func,
};
BookList.defaultProps = {
  deltBook: () => {},
};
export default BookList;
