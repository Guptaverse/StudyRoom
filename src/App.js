import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import Login from './Routes/Login';
import Register from './Routes/Register';
import LoginComp from './Components/LoginComp';
import Dashboard from './Routes/Dashboard';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/logincomp' element={<LoginComp />} />
      </Routes>
    </>
  );
}

export default App;
