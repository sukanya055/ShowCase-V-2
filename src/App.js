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
  Dashboard,
  // ChangePassword
} from "./pages";

import "./App.css";

import ChangePassword from "./pages/ChangePassword";
import NormalDashboard from "./pages/NormalDashboard";
import BusinessChangePassword from "./pages/BusinessChangePassword";
import Gps from "./pages/Gps";
import ChatAdmin from "./components/ChatFile/ChatAdmin";
import PrivateRoute from "./utils/PrivateRoute";
import BusinessDashboard from "./pages/BusinessDashboard";
import Payment from "./components/payment/Payment";
import PrivateUserRoute from "./utils/PrivateUserRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* support chat route For admin */}
        <Route
          path="/supportChat"
          element={
            <PrivateRoute>
              <ChatAdmin />
            </PrivateRoute>
          }
        />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/auth" element={<Login />} />

        <Route path="/" element={<Home />} />

        <Route path="/dashboard">
          <Route path="normalDashboard" element={<PrivateRoute>
            <NormalDashboard />
          </PrivateRoute>} />
          <Route path="updateProfile" element={<PrivateRoute>
            <NormalProfile />
          </PrivateRoute>} />
          <Route
            path="updatePasswordNormalProfile"
            element={<PrivateRoute>
              <ChangePassword />
            </PrivateRoute>}
          />
        </Route>

        <Route path="/businessProfile">
          <Route path="businessDashboard" element={<BusinessDashboard />} />
          <Route
            path="updateBusinessPassword"
            element={<BusinessChangePassword />}
          />
          <Route path="updateBusinessProfile" element={<BusinessProfile />} />
          <Route path="updateGps" element={<Gps />} />
        </Route>

        <Route
          path="/changePassword"
          element={
              <PasswordChange />
          }
        />
        <Route
          path="/businessAccountSetup"
          element={<BussinessAccountSetup />}
        />
        
        <Route path="/normalAccountSetup" element={<BussinessAccountSetup />} />
  
        <Route path="/completeProfile" element={<CompleteProfile />} />
        <Route
          path="/otpVerify"
          element={
              <OtpVerify />
          }
        />
        <Route path="/joinUs" element={<JoinUs />} />
        <Route path="/products/:content" element={<Products />} />
        <Route path="/setupCompleted" element={<SetUpCompleted />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/admindashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
