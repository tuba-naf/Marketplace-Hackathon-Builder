"use client"; // This marks the component as a client-side component

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Updated import for useRouter in App Router
import { useCart } from '@/app/Cart/Context/Cartcontext'; // Import useCart hook
import Link from 'next/link';

// Define the product interface
interface Product {
  id: string;
  Name: string;
  Description: string;
  Price: number;
  Image: string;
  Supplier: string;
  Category: string;
  Availability: boolean;
  WebsiteLink: string;
}

interface Params {
  id: string;
}

export default function ProductPage({ params }: { params: Promise<Params> }) {
  const [product, setProduct] = useState<Product | null>(null); // Type the state
  const [resolvedParams, setResolvedParams] = useState<Params | null>(null); // Add local state for resolved params
  const [isAddedToCart, setIsAddedToCart] = useState(false); // State to manage modal visibility

  const { addToCart } = useCart(); // Access the addToCart function from context
  const router = useRouter(); // Use the updated useRouter from next/navigation

  // Fetch product data using useEffect hook
  useEffect(() => {
    const resolveParams = async () => {
      const result = await params;
      setResolvedParams(result);
    };
    resolveParams();
  }, [params]);

  useEffect(() => {
    if (resolvedParams?.id) {
      const fetchProduct = async () => {
        const res = await fetch(`https://678fd35e49875e5a1a93828c.mockapi.io/Data/${resolvedParams.id}`);
        const data = await res.json();
        setProduct(data);
      };

      fetchProduct();
    }
  }, [resolvedParams]);

  const handleAddToCart = () => {
    if (!product) return; // Check to ensure product is not null

    const cartItem = {
      id: product.id,
      heading: product.Name,
      price: product.Price,
      image: product.Image,
      quantity: 1,
      selectedColor: 'default', // Adjust this if you want to add color selection
      selectedSize: 'default',  // Adjust this if you want to add size selection
    };

    addToCart(cartItem); // Add product to cart
    setIsAddedToCart(true); // Show modal after adding to cart

    // Redirect to the "add-to-cart" page after a short delay to show the modal
    setTimeout(() => {
      setIsAddedToCart(false);
      router.push('/Cart'); // Navigate to the cart page
    }, 3000); // Hide modal after 3 seconds
  };

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-gray-600">Product not found</h1>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-10">
      <div className="w-full max-w-3xl p-6 bg-white shadow-md rounded-lg">
        {/* Product Image */}
        {product.Image && (
          <img
            src={product.Image}
            alt={product.Name}
            className="w-full max-h-72 object-contain rounded-md mb-6"
          />
        )}
        {/* Product Details */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.Name}</h1>
        <p className="text-lg text-gray-600 mb-2">{product.Description}</p>
        <p className="text-lg text-gray-800 font-semibold mb-2">Price: ${product.Price}</p>
        <p className="text-md text-gray-600 mb-1">Supplier: {product.Supplier}</p>
        <p className="text-md text-gray-600 mb-1">Category: {product.Category}</p>
        <p className="text-md text-gray-600 mb-4">
          Availability:{" "}
          <span className={product.Availability ? "text-green-500" : "text-red-500"}>
            {product.Availability ? "In Stock" : "Out of Stock"}
          </span>
        </p>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}  // Added the event handler
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Add to Cart
        </button>

        {/* Website Link */}
        {product.WebsiteLink !== "Not available" && (
          <Link href={product.WebsiteLink} passHref>
            <span className="text-blue-600 hover:underline cursor-pointer mt-4 block">
              Visit Website
            </span>
          </Link>
        )}
      </div>

      {/* Modal for added to cart confirmation */}
      {isAddedToCart && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-md text-center">
            <h2 className="text-xl font-bold text-green-600">Item Added to Cart!</h2>
            <p className="text-gray-600">Your product has been successfully added to the cart.</p>
            <button
              onClick={() => setIsAddedToCart(false)}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
