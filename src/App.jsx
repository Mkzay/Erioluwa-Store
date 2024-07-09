import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import HomePage from "./Page/HomePage";
import Footer from "./Components/Footer";
import ProductItem from "./Components/ProductItem";
import CartPage from "./Page/CartPage";
import { CartProvider } from "./Contexts/CartContext";

export default function App() {
  return (
    <Router>
      <CartProvider>
        <div className="flex flex-col items-center justify-center">
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductItem />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}
