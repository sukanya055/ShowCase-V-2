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
        <Route path="/bussinessAccSetup" element={<BussinessAccountSetup />} />
        <Route path="/completeProfile" element={<CompleteProfile />} />
        <Route path="/otpVerify" element={<OtpVerify />} />
        <Route path="/joinUs" element={<JoinUs />} />
      </Routes>
    </div>
  );
}

export default App;
