import BookList from './BookList';
import Bookform from './Bookform';

function Home() {
  return (
    <div>
      {/* <BookList books={books} deltBook={deltBook} /> */}
      <BookList />
      {/* <Bookform addNewbook={addNewbook} /> */}
      <Bookform />

    </div>
  );
}
export default Home;
