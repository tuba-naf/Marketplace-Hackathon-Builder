"use client";

import Image from "next/image";
import { useState } from "react";
import { useCart } from "../Cart/Context/Cartcontext";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const [imageFallback, setImageFallback] = useState<string | null>(null); // State to handle image fallback

  // Calculate total price
  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle image error
  const handleImageError = () => {
    setImageFallback("/default-image.png"); // Set fallback image on error
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
        Shop with Biorunners
      </h1>
      <h2 className="text-lg text-center text-gray-600 mb-6">
        You’re just a click away from ordering your product
      </h2>

      {/* Customized Message for Customers */}
      <div className="bg-blue-100 text-blue-800 border border-white-300  p-4 text-center mb-8 shadow-sm">
        <p className="text-sm md:text-base font-medium">
          🌟 Thank you for shopping with us! Don’t forget to double-check your cart before checkout. We’re excited to deliver your products soon! 🎉
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="text-center mt-6">
          <p className="text-lg text-gray-500 mb-4">Your cart is currently empty.</p>
          <button
            onClick={() => window.location.href = "/Components/Productdisplay"} // Or wherever your product page is
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="space-y-6 max-w-3xl mx-auto">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row justify-center items-center gap-6 border border-gray-300 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Left Section: Item Details */}
              <div className="text-center md:text-left">
                <h2 className="font-medium text-lg text-gray-800">
                  {item.heading}
                </h2>
                <p className="text-gray-600 mt-1">
                  ${item.price.toFixed(2)} x {item.quantity}
                </p>
                <p className="font-bold text-gray-800 mt-1">
                  Total: ${(item.price * item.quantity).toFixed(2)}
                </p>
                <p className="mt-3 text-sm text-gray-600">
                  <strong>Color:</strong> {item.selectedColor || "Not selected"}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Size:</strong> {item.selectedSize || "Not selected"}
                </p>
                <div className="flex items-center justify-center md:justify-start mt-4 space-x-3">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-2 py-1 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 text-sm transition"
                    aria-label="Decrease quantity"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="text-sm font-medium">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-100 border border-gray-300 rounded hover:bg-gray-200 text-sm transition"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <div className="mt-3 flex space-x-3">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600 transition"
                    aria-label="Remove item from cart"
                  >
                    Remove
                  </button>
                  <button
                    onClick={() => window.location.href = "/Components/Productdisplay"} // Navigate to the product display page
                    className="px-3 py-1 text-sm bg-green-500 text-white rounded hover:bg-green-600 transition"
                    aria-label="Add more products"
                  >
                    Add More Products
                  </button>
                  <button
                    onClick={() => {
                      cart.forEach(item => removeFromCart(item.id));
                    }}
                    className="px-3 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
                    aria-label="Empty cart"
                  >
                    Empty Cart
                  </button>
                </div>
              </div>

              {/* Right Section: Item Image */}
              <div>
                <Image
                  src={imageFallback || item.image || "/default-image.png"}
                  alt={item.heading}
                  width={150}
                  height={150}
                  className="object-cover rounded-md shadow-sm"
                  onError={handleImageError} // Set fallback image on error
                />
              </div>
            </div>
          ))}

          {/* Bottom Section: Checkout */}
          <div className="flex justify-between items-center mt-9">
            {/* Back to Products Button */}
            <button
              onClick={() => window.history.back()} // Simple back functionality
              className="w-full md:w-auto px-6 py-2 bg-gray-600 text-white text-sm rounded hover:bg-gray-700 transition mt-11"
            >
              Back to Products
            </button>

            {/* Checkout Section */}
            <div className="flex flex-col items-end">
              <p className="mb-4 text-gray-800 font-bold text-lg">
                Total: ${calculateTotal().toFixed(2)}
              </p>
              <button className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
