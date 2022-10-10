import { Route, Routes } from "react-router-dom";
import {
  Product,
  Login,
  Home,
  NormalProfile,
  BusinessProfile,
  PasswordChange,
} from "./pages";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Home />} />
        <Route path="/normalProfile" element={<NormalProfile />} />
        <Route path="/businessProfile" element={<BusinessProfile />} />
        <Route path="/changePassword" element={<PasswordChange />} />
      </Routes>
    </div>
  );
}

export default App;
