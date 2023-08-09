import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import Notfound from './components/Notfound';
import EventHandling from './components/EventHandling';
import StateManagement from './components/StateManagement';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
      <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Login />} path='/login' />
          <Route element={<SignUp />} path='/signup' />
          <Route element={<EventHandling />} path='/event' />
          <Route element={<StateManagement />} path='/state' />
          <Route element={<Notfound />} path='/*' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
