import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Classes from './pages/program/Program';
import Login from './pages/login/Login';
import Registation from './pages/registration/Registration';
import Training from './pages/training/Training';
import Pricing from './pages/pricing/Pricing';
import AboutUs from './pages/about/AboutUs';
import ProtectsRoutes from './services/ProtectsRoutes';


function App() {
  return (
    <BrowserRouter>
   
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/aboutUs' element={<AboutUs/>} />
      <Route path='/programs' element={<Classes/>} />
      <Route path='/training' element={<Training/>} />
      <Route path='/pricing' element={<Pricing/>} />
      

      {/* Protecting Routind =>> */}

      <Route path='/registation' element={<ProtectsRoutes/>}>
      <Route path='/registation' element={<Registation/>} />
      </Route>
      
      <Route path='/login' element={<ProtectsRoutes/>}>
      <Route path='/login' element={<Login/>} />
      </Route>
      
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;