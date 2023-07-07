import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';
import '../CSS/addbook.css';

function Bookform() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const add = (e) => {
    e.preventDefault();
    if (name.trim && author.trim) {
      dispatch(addBook({
        item_id: uuid4(),
        title: name,
        author,
        category: '',
      }));
      setName('');
      setAuthor('');
    }
  };

  return (
    <div className="add-container">
      <h2 className="Add-header">ADD NEW BOOK</h2>
      <form>
        <input
          className="add-book"
          type="text"
          placeholder="Add new book name.."
          value={name}
          onChange={(n) => setName(n.target.value)}
        />

        <input
          className="add-author"
          type="text"
          placeholder="Add author.."
          value={author}
          onChange={(a) => setAuthor(a.target.value)}
        />
        <button
          type="submit"
          className="input-submit"
          onClick={add}
        >
          Submit
        </button>

      </form>
    </div>
  );
}

export default Bookform;
