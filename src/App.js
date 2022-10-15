import { Route, Routes } from "react-router-dom";
import {
  Product,
  Login,
  Home,
  NormalProfile,
  BusinessProfile,
  PasswordChange,
  BussinessAccountSetup,
  CompleteProfile,
  OtpVerify,
  JoinUs,
  // ChangePassword
} from "./pages";

import "./App.css";

import ChangePassword from "./pages/ChangePassword";
import NormalDashboard from "./pages/NormalDashboard";
import BusinessChangePassword from "./pages/BusinessChangePassword";
import Gps from "./pages/Gps";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/product/:id" element={<Product />} />
        <Route path="/auth" element={<Login />} />

        <Route path="/" element={<Home />} />

        <Route path="dashboard"  >
          <Route index path='updateProfile' element={<NormalProfile />} />
          <Route path='updatePasswordNormalProfile' element={<ChangePassword />} />
        </Route>

        <Route path="/businessProfile"   >
          <Route path="updateBusinessPassword" element={<BusinessChangePassword />} />
          <Route path="updateBusinessProfile" element={<BusinessProfile />} />
          <Route path="updateGps" element={<Gps />} />
        </Route>

        <Route path="/changePassword" element={<PasswordChange />} />

        <Route path="/businessAccountSetup" element={<BussinessAccountSetup />} />
        <Route path="/normalAccountSetup" element={<BussinessAccountSetup />} />

        <Route path="/completeProfile" element={<CompleteProfile />} />
        <Route path="/otpVerify" element={<OtpVerify />} />
        <Route path="/joinUs" element={<JoinUs />} />
        
      </Routes>
    </div>
  );
}

export default App;
