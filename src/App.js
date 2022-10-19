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
  Products,
  SetUpCompleted,
  // ChangePassword
} from "./pages";

import "./App.css";

import ChangePassword from "./pages/ChangePassword";
import NormalDashboard from "./pages/NormalDashboard";
import BusinessChangePassword from "./pages/BusinessChangePassword";
import Gps from "./pages/Gps";
import ChatAdmin from "./components/ChatFile/ChatAdmin";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* support chat route For admin */}
        <Route path="/supportChat" element={<ChatAdmin />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/auth" element={<Login />} />

        <Route path="/" element={<Home />} />

        <Route path="dashboard">
          <Route path="updateProfile" element={<NormalProfile />} />
          <Route
            path="updatePasswordNormalProfile"
            element={<ChangePassword />}
          />
        </Route>

        <Route path="/businessProfile">
          <Route
            path="updateBusinessPassword"
            element={<BusinessChangePassword />}
          />
          <Route path="updateBusinessProfile" element={<BusinessProfile />} />
          <Route path="updateGps" element={<Gps />} />
        </Route>

        {/* conflict solve */}

        <Route path="/changePassword" element={<PasswordChange />} />

        <Route
          path="/businessAccountSetup"
          element={<BussinessAccountSetup />}
        />
        <Route path="/normalAccountSetup" element={<BussinessAccountSetup />} />

        <Route path="/completeProfile" element={<CompleteProfile />} />
        <Route path="/otpVerify" element={<OtpVerify />} />
        <Route path="/joinUs" element={<JoinUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/setupCompleted" element={<SetUpCompleted />} />
      </Routes>
    </div>
  );
}

export default App;
