import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import BusinessProfile from './components/Profile/businessProfile/BusinessProfile';
import NormalProfile from './components/Profile/NormalProfile/NormalProfile';
import PasswordChange from './components/Profile/PasswordChange';
import Footer from './components/share/Footer';
import Navbar from './components/share/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/normalProfile' element={<NormalProfile />} />
        <Route path='/businessProfile' element={<BusinessProfile />} />
        <Route path='/changePassword' element={<PasswordChange />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
