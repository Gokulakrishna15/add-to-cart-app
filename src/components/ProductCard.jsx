import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { cart, addToCart } = useContext(CartContext);
  const inCart = cart.find(item => item.id === product.id);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
      <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto" />
      <h2 className="font-semibold text-lg mt-2 text-gray-800">{product.title}</h2>
      <p className="text-sm text-gray-600 mt-1">{product.description.slice(0, 80)}...</p>
      <p className="text-blue-600 font-bold mt-2 text-lg">₹{product.price}</p>
      <button
        className={`mt-3 px-4 py-2 rounded font-medium ${
          inCart ? "bg-red-500 hover:bg-red-600" : "bg-blue-600 hover:bg-blue-700"
        } text-white transition duration-200`}
        onClick={() => addToCart(product)}
      >
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
}