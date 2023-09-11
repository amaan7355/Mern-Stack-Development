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
import ManageUser from './components/ManageUser';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';



function App() {
  return (
    <div>
      <Toaster position='top right' />
      <AnimatePresence >
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
          <Route element={<ManageUser />} path='/manage' />
          <Route element={<Notfound />} path='/*' />
        </Routes>
      </BrowserRouter>
      </AnimatePresence>
    </div>
  );
}

export default App;
