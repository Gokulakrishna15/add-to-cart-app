import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartItem({ item }) {
  const { updateQuantity, removeFromCart } = useContext(CartContext);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex justify-between items-center">
      <div>
        <h2 className="font-semibold text-gray-800">{item.title}</h2>
        <p className="text-sm text-gray-600">₹{item.price} × {item.quantity} = ₹{(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <div className="flex gap-2 items-center">
        <button onClick={() => updateQuantity(item.id, -1)} className="px-2 py-1 bg-gray-300 rounded">−</button>
        <span>{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, 1)} className="px-2 py-1 bg-gray-300 rounded">+</button>
        <button onClick={() => removeFromCart(item.id)} className="px-3 py-1 bg-red-500 text-white rounded">Remove</button>
      </div>
    </div>
  );
}