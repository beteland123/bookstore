import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/booksSlice';

function Deletebtn({ id }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeBook(id));
  };
  return (
    <button
      type="button"
      onClick={handleDelete}
    >
      Remove
    </button>
  );
}
Deletebtn.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Deletebtn;
