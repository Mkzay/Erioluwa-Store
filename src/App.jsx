import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import HomePage from "./Page/HomePage";
import Footer from "./Components/Footer";
import ProductItem from "./Components/ProductItem"; // Adjust the import path as needed

export default function App() {
  return (
    <Router>
      <div className="flex flex-col items-center justify-center">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductItem />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
