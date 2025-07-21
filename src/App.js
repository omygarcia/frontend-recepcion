import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Empleados from './pages/Empleados';
import Areas from './pages/Areas';
import PdfArea from './pages/PdfArea';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/empleados' element={<Empleados />} />
        <Route path='/areas' element={<Areas />} />
        <Route path='/pdf-area' element={<PdfArea />} />
      </Routes>
    </Router>
  );
}

export default App;
