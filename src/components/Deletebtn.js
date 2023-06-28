import PropTypes from 'prop-types';

function Deletebtn({ bookID, deltBook }) {
  const handleDelete = () => {
    deltBook(bookID);
  };

  return (
    <button type="button" onClick={handleDelete}>Remove</button>
  );
}
Deletebtn.propTypes = {
  bookID: PropTypes.number.isRequired,
  deltBook: PropTypes.func,
};
Deletebtn.defaultProps = {
  deltBook: () => {},
};
export default Deletebtn;
