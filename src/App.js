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
} from "./pages";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/product/:id" element={<Product />} />
        <Route path="/auth" element={<Login />} />

        <Route path="/" element={<Home />} />
        <Route path="/normalProfile" element={<NormalProfile />} />
        <Route path="/businessProfile" element={<BusinessProfile />} />
        <Route path="/changePassword" element={<PasswordChange />} />
        <Route path="/businessAcountSetup" element={<BussinessAccountSetup />} />
        <Route path="/normalAcountSetup" element={<BussinessAccountSetup />} />
        <Route path="/completeProfile" element={<CompleteProfile />} />
        <Route path="/otpVerify" element={<OtpVerify />} />
      </Routes>
    </div>
  );
}

export default App;
