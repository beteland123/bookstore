import BookList from './Bookrender';
import Bookform from './Bookform';
import '../CSS/homestyle.css';

function Home() {
  return (
    <div className="container">
      <div>
        <BookList />
        <hr className="horzontal-divider" />
        <Bookform />
      </div>
    </div>

  );
}
export default Home;
