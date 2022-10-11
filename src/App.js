import { Route, Routes } from "react-router-dom";
import {
  Product,
  Login,
  Home,
  NormalProfile,
  BusinessProfile,
  PasswordChange,
  BussinessAccountSetup,
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
      </Routes>
    </div>
  );
}

export default App;
