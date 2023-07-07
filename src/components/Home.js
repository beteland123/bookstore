import BookList from './Bookrender';
import Bookform from './Bookform';
import '../CSS/homestyle.css';

function Home() {
  return (
    <div className="container">
      <BookList />
      <hr className="horzontal-divider" />
      <Bookform />
    </div>
  );
}
export default Home;
