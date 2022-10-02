import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// import Sidebar from './layouts/Sidebar';
import Sidebar from './layout1/Sidebar';
import { Route, Routes } from "react-router-dom";
import Content from './layout1/Content';
import User from './layout1/User';

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/nhanvien/nhanvien1" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
