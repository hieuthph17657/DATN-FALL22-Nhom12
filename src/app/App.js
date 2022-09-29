import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './layouts/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Login from '../components/Login';

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path={'/login'} element={<Login></Login>} />
      </Routes>
    </>
  );
}

export default App;
