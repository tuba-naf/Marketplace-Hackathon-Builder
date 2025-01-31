'use client'
import { createContext, useContext, useState } from "react";

// Cart Item interface
interface CartItem {
  id: string;
  heading: string;
  price: number;
  image: string;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

// Cart context interface with cartItemCount
interface CartContextType {
  cart: CartItem[];
  cartItemCount: number;  // Include this in the context type
  addToCart: (item: CartItem) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
}

// Creating CartContext with default value
const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider component
export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Calculate the total number of items in the cart
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Function to add items to the cart
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.selectedColor === item.selectedColor &&
          cartItem.selectedSize === item.selectedSize
      );

      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id &&
          cartItem.selectedColor === item.selectedColor &&
          cartItem.selectedSize === item.selectedSize
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...prevCart, { ...item, quantity: 1 }];
    });

    alert("Added to cart Successfully!");
  };

  // Function to update quantity of an item in the cart
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity < 1) return;
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === id ? { ...cartItem, quantity } : cartItem
      )
    );
  };

  // Function to remove item from the cart
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== id));
    alert("Removed from cart Successfully!");
  };

  return (
    <CartContext.Provider
      value={{ cart, cartItemCount, addToCart, updateQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use Cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
