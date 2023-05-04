import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Routes/Dashboard';
import HomePage from './Components/HomePage';
import Login from './Routes/Login';
import Register from './Routes/Register';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/Dashboard' element={<Dashboard />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
