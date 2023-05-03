import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Routes/Dashboard';
import HomePage from './Components/HomePage';
import Login from './Components/Login';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
