import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import {
  fetchbook, getBooks, getError, getStatus,
} from '../redux/books/booksSlice';
import Deletebtn from './Deletebtn';
import '../CSS/bookslist.css';

function BookList() {
  const dispatch = useDispatch();
  const books = useSelector(getBooks);
  const booksStatus = useSelector(getStatus);
  const booksError = useSelector(getError);
  const [bookProgress, setBookProgress] = useState({});
  const [bookChapter, setBookChapter] = useState({});
  const updateProgress = (itemId) => {
    const currentProgress = bookProgress[itemId] || 0;
    const newProgress = (currentProgress !== 100) ? currentProgress + 1 : 0;
    setBookProgress({
      ...bookProgress,
      [itemId]: newProgress,
    });
    localStorage.setItem(`progress_${itemId}`, newProgress);
  };
  const updateChapter = (itemId) => {
    const newChapter = (bookChapter[itemId] || 0) + 1;
    setBookChapter({
      ...bookChapter,
      [itemId]: newChapter,
    });
    localStorage.setItem(`chapter_${itemId}`, newChapter);
  };
  useEffect(() => {
    dispatch(fetchbook());
    // Retrieve progress and chapter data from Local Storage
    const storedProgress = JSON.parse(localStorage.getItem('bookProgress') || '{}');
    setBookProgress(storedProgress);
    const storedChapter = JSON.parse(localStorage.getItem('bookChapter') || '{}');
    setBookChapter(storedChapter);
  }, []);
  if (booksStatus === true) {
    return <div>Loading...</div>;
  }
  if (booksError !== '') {
    return <div>error fetcing</div>;
  }
  return (
    <div className="books">
      {books.map((book) => (
        <ul key={book.item_id} className="book-info">
          <li className="book-child">
            <li key={book.item_id}><h4 className="book-category">{book.category || 'Action'}</h4></li>
            <li key={book.item_id}><h2 className="book-title">{book.title}</h2></li>
            <li key={book.item_id}><h6 className="book-author">{book.author}</h6></li>
            <li key={book.item_id}>
              <ul className="React">
                <li>Comments</li>
                <div className="react-divider" />
                <li key={book.item_id}>
                  <Deletebtn id={book.item_id} />
                  {' '}
                </li>
                <div className="react-divider" />
                <li key={book.item_id}>Edit</li>
              </ul>
            </li>
          </li>
          <li className="progress" key={book.item_id}>
            <button type="button" className="btncircle" onClick={() => updateProgress(book.item_id)}>
              <CircularProgressbar
                value={bookProgress[book.item_id] || 0}
                strokeWidth={10}
                styles={buildStyles({
                  pathColor: '#3e98c7',
                  trailColor: '#d6d6d6',
                  backgroundColor: '#f88',
                })}
              />
            </button>

            <div className="progressDiv">
              <span className="percentage">
                {bookProgress[book.item_id] || 0}
                %
              </span>
              <span className="percent-text">completed</span>
            </div>
            <div className="progress-divider" />
            <div className="chapterDiv">
              <span className="current-chapter">Current chapter</span>
              <span className="show-chapter">
                <span> Chapter  </span>

                {bookChapter[book.item_id] || 0}
              </span>
              <button type="button" onClick={() => updateChapter(book.item_id)} className="chap-updater">Update progress</button>
            </div>

          </li>

        </ul>
      ))}

    </div>
  );
}

export default BookList;
