import { useState } from 'react';
import { v4 as uuid4 } from 'uuid';
import BookList from './BookList';
import Bookform from './Bookform';

function Home() {
  const [books, setBooks] = useState([
    {
      id: uuid4(),
      bookName: 'The Hundger Games',
      author: 'Suzanne Collins',
      currentChapter: 'Chapter 17',
      progress: '64%',
      catagory: 'Action',

    },
    {
      id: uuid4(),
      bookName: 'Dune',
      author: 'Frank Herbert',
      currentChapter: 'Chapter 3',
      progress: '8%',
      catagory: 'Action',

    },
    {
      id: uuid4(),
      bookName: 'Capital in the Twenty-First Century',
      author: 'Frank Herbert',
      currentChapter: 'Chapter 0',
      progress: '8%',
      catagory: 'Action',

    },
  ]);
  const deltBook = (id) => {
    setBooks([
      ...books.filter((b) => id !== b.id),
    ]);
  };
  const addNewbook = (name, author) => {
    const newbook = {
      id: uuid4(),
      bookName: name,
      author,
      currentChapter: 'Chapter 0',
      progress: '0%',

    };
    setBooks([...books, newbook]);
  };

  return (
    <div>
      <BookList books={books} deltBook={deltBook} />
      <Bookform addNewbook={addNewbook} />

    </div>
  );
}
export default Home;
