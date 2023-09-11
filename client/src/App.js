import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListUserPage from "./components/ListUserPage"
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
function App() {
  return (
    <div className="vh-100 gradient-custom">
    <div className="container">
    <nav className="navbar mb-2" style={{ backgroundColor: "#e3f2fd", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }}>
  <div className="col-12 d-flex justify-content-center align-items-center">
    <p className="fs-1 text-center">CRUD APP USING REACT AND FLASK</p>
  </div>
</nav>

    
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<ListUserPage />} />
            <Route path="/addnewuser" element={<CreateUser />} /> 
            <Route path="user/:id/edit" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;
