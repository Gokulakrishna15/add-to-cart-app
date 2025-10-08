import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = total * 0.1;
  const finalPrice = total - discount;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">🛒 Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="bg-white rounded-lg shadow-md p-4 text-right border-t mt-6">
            <p className="text-lg">Subtotal: ₹{total.toFixed(2)}</p>
            <p className="text-lg text-green-600">Discount (10%): −₹{discount.toFixed(2)}</p>
            <p className="text-xl font-bold mt-2 text-blue-700">Final Price: ₹{finalPrice.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
}