import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Routes/Dashboard';
import HomePage from './Components/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/Dashboard' element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
