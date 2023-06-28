import { useState } from 'react';
import PropTypes from 'prop-types';

function Bookform({ addNewbook }) {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const add = (e) => {
    e.preventDefault();
    if (name.trim && author.trim) {
      addNewbook(name, author);
      setName('');
      setAuthor('');
    }
  };
  return (
    <>
      <form onSubmit={add}>
        <input
          type="text"
          placeholder="Add new book name.."
          value={name}
          onChange={(n) => setName(n.target.value)}
        />

        <select value={author} onChange={(a) => setAuthor(a.target.value)}>
          <option value="">Select an author</option>
          <option value="John Doe">John Doe</option>
          <option value="John Noakes"> John Noakes</option>
          <option value="Richard Miles">Richard Miles</option>
          <option value="Mary Major">Mary Major</option>
        </select>
        <button
          type="submit"
          className="input-submit"
        >
          Submit
        </button>

      </form>
    </>
  );
}
Bookform.propTypes = {
  addNewbook: PropTypes.func,
};
Bookform.defaultProps = {
  addNewbook: () => {},
};
export default Bookform;
