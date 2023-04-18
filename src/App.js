// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Classes from './pages/Classes';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Footer from './pages/Footer';
import Registation from './pages/Registation';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/aboutUs' element={<AboutUs/>} />
      <Route path='/classes' element={<Classes/>} />
      <Route path='/blogs' element={<Blog/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/registation' element={<Registation/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
