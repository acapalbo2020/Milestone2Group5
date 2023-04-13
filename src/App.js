
import logo from './logo.svg';
//import './App.css';
//import Header from './Pages/Shared/Header/Header';
import Home from './home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Login from './Pages/Login/Login';
//import Signup from './Pages/Signup/Signup';
//import Notfound from './Pages/Notfound/Notfound';
//import Footer from './Pages/Shared/Footer/Footer';
//import ContactUs from './Pages/Contact Us/ContactUs';
//import Aboutus from './Pages/About us/Aboutus';
//import Packages from './Pages/Packages/Packages';

//import ServiceDetail from './Pages/ServiceDetail/ServiceDetail';
//import Doctors from './Pages/Doctors/Doctors';
//import AuthProvider from './Pages/Context/AuthProvider';
//import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Detail from './detail';
import CreateNew from './createNew';
import List from './list'



function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/Detail" element={<Detail/>} />
            <Route exact path="/List" element={<List/>} />
            <Route exact path="/CreateNew" element={<CreateNew/>} />
            <Route exact path="/Home" element={<Home/>} />

   



          </Routes>
          




        </Router>

    </div>
  );
}

export default App;