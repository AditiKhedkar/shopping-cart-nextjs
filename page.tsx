"use client";
import { useState } from "react";

const products = [
  { id: 1, name: "T-shirt", price: 299 },
  { id: 2, name: "Jeans", price: 999 },
  { id: 3, name: "Sneakers", price: 1499 },
];

export default function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const getTotal = () => cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h2 className="text-xl font-bold mb-4">Products</h2>
        {products.map((product) => (
          <div key={product.id} className="mb-2 p-4 border rounded-lg flex justify-between items-center">
            <div>
              <p className="font-semibold">{product.name}</p>
              <p>₹{product.price}</p>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => addToCart(product)}>Add</button>
          </div>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item, index) => (
            <div key={index} className="mb-2 p-4 border rounded-lg flex justify-between items-center">
              <div>
                <p>{item.name}</p>
                <p>₹{item.price}</p>
              </div>
              <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))
        )}
        <div className="mt-4 font-bold">Total: ₹{getTotal()}</div>
      </div>
    </div>
  );
}
