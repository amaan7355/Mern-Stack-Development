import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ContactForm from './components/ContactForm';
import Notfound from './components/Notfound';
import EventHandling from './components/EventHandling';
import StateManagement from './components/StateManagement';
import Post from './components/Post';
import ToDo from './components/ToDo';
import Navbar from './components/Navbar';
import Browse from './components/Browse';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
      <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Login />} path='/login' />
          <Route element={<SignUp />} path='/signup' />
          <Route element={<ContactForm />} path='/contact' />
          <Route element={<EventHandling />} path='/event' />
          <Route element={<StateManagement />} path='/state' />
          <Route element={<Post />} path='/post' />
          <Route element={<ToDo />} path='/todo' />
          <Route element={<Browse />} path='/laptop' />
          <Route element={<Notfound />} path='/*' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
