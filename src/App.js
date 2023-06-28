import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Catagories from './components/categoriesPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <>

      <NavBar />
      <Routes>
        <Route path="/" elemnent={<Home />} />
        <Route path="/catagories" elemnent={<Catagories />} />
      </Routes>
    </>
  );
}

export default App;
