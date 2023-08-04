import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route element={<Home /> } path='/' />
        <Route element={<Login /> } path='/login' />
        <Route element={<SignUp /> } path='/signup' />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
