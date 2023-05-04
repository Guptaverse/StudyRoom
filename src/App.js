import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Routes/Dashboard';
import HomePage from './Components/HomePage';
import Login from './Routes/Login';
import Register from './Routes/Register';
import Login from './Components/Login';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
