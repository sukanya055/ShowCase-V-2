<<<<<<< HEAD
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Product, Login } from "./pages";
=======
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import BusinessProfile from './components/Profile/businessProfile/BusinessProfile';
import NormalProfile from './components/Profile/NormalProfile/NormalProfile';
import PasswordChange from './components/Profile/PasswordChange';
import Footer from './components/share/Footer';
import Navbar from './components/share/Navbar';
>>>>>>> fe77bcbb2bfae6525ee6364c93703d53417b4497

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Router>
        <Routes>
          <Route path="/product/:id" element={<Product />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
=======
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/normalProfile' element={<NormalProfile />} />
        <Route path='/businessProfile' element={<BusinessProfile />} />
        <Route path='/changePassword' element={<PasswordChange />} />

      </Routes>
      <Footer />
>>>>>>> fe77bcbb2bfae6525ee6364c93703d53417b4497
    </div>
  );
}

export default App;
