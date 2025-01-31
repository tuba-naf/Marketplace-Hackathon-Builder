import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: string;
  Name: string;
  Description: string;
  Price: number;
  Availability: boolean;
  Image: string;
}

export default function ProductDetails() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://678fd35e49875e5a1a93828c.mockapi.io/Data');
        if (!response.ok) {
          throw new Error(`Failed to fetch products: ${response.statusText}`);
        }
        const data: Product[] = await response.json();
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          throw new Error('Unexpected data format');
        }
      } catch (err: unknown) {
        // Type narrowing to handle error properly
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="text-center text-gray-600">
        <svg
          className="animate-spin h-8 w-8 mx-auto text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="10" strokeWidth="4" stroke="currentColor" fill="none"></circle>
          <path fill="none" stroke="currentColor" strokeWidth="4" d="M4 12a8 8 0 0 1 16 0"></path>
        </svg>
        <p className="mt-4">Loading products...</p>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 font-semibold">{`Error: ${error}`}</div>;
  }

  // Categorize products
  const bioFertilizers = products.slice(0, 10);
  const researchEquipments = products.slice(10, 15);
  const bioProducts = products.slice(15);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800">Our Products</h1>
        <p className="text-xl text-gray-600 mt-2">Discover a variety of innovative solutions</p>
      </header>

      {/* Categories */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-blue-500 mb-6 border-b-4 border-blue-300 pb-2">
          Biofertilizers
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {bioFertilizers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-green-500 mb-6 border-b-4 border-green-300 pb-2">
          Research Equipments
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {researchEquipments.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-purple-500 mb-6 border-b-4 border-purple-300 pb-2">
          Bioproducts
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {bioProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      </section>
    </div>
  );
}

// Product Card Component
function ProductCard({ product }: { product: Product }) {
  return (
    <li className="bg-white border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <div className="w-full h-56 overflow-hidden">
          <Image
            src={product.Image}
            alt={product.Name || 'Product Image'}
            width={500}
            height={300}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="absolute top-2 right-2 bg-black text-white text-xs px-3 py-1 rounded-lg">
          {product.Availability ? 'In Stock' : 'Out of Stock'}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.Name || 'No Title'}</h3>
        <p className="text-lg text-gray-700 mb-4">${product.Price?.toFixed(2)}</p>
        <p className="text-sm text-gray-500 mb-6 line-clamp-3">
          {product.Description || 'No description available.'}
        </p>
        <Link href={`/products/${product.id}`} passHref>
          <button className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-transform duration-300 transform hover:scale-105">
            View Details
          </button>
        </Link>
      </div>
    </li>
  );
}
