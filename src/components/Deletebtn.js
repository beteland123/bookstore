import PropTypes from 'prop-types';

function Deletebtn({ bookId, deltBook }) {
  const handleDelete = () => {
    deltBook(bookId);
  };

  return (
    <button type="button" onClick={handleDelete}>Remove</button>
  );
}
Deletebtn.propTypes = {
  bookId: PropTypes.string.isRequired,
  deltBook: PropTypes.func,
};
Deletebtn.defaultProps = {
  deltBook: () => {},
};
export default Deletebtn;
