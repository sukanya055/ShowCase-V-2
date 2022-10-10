import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Product, Login } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/product/:id" element={<Product />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
