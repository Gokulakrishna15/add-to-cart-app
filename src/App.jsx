import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Products from "./pages/Products.jsx";
import Cart from "./pages/Cart.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <Link to="/" className="text-xl font-bold text-blue-600">🛍️ Shop</Link>
        <Link to="/cart" className="text-md font-medium text-gray-700 hover:text-blue-500">View Cart</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <footer className="bg-white text-center text-sm text-gray-500 py-4 mt-8 shadow-inner">
        Built by Gokulakrishna • Powered by React & Tailwind
      </footer>
    </div>
  );
}