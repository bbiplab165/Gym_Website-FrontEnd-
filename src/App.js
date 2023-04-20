import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Classes from './pages/program/Program';
import Login from './pages/login/Login';
import Registation from './pages/registration/Registration';
import Training from './pages/training/Training';
import Pricing from './pages/mui_pricing/Pricing';
import AboutUs from './pages/about/AboutUs';

function App() {
  return (
    <BrowserRouter>
   
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/aboutUs' element={<AboutUs/>} />
      <Route path='/programs' element={<Classes/>} />
      <Route path='/training' element={<Training/>} />
      <Route path='/pricing' element={<Pricing/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/registation' element={<Registation/>} />
      
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;