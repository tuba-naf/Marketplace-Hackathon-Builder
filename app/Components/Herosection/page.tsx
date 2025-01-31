import React from 'react';
import Link from 'next/link';

const HeroSection1 = () => {
  return (
    <section className="bg-white text-black py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold mb-4">
          Welcome to <span className="text-blue-500">Biorunners</span>
        </h1>
        <p className="text-lg sm:text-2xl mb-6 text-gray-700">
          Bridging the gap between academia and industry, fostering the growth of life sciences in Pakistan.
        </p>
        <p className="text-xl sm:text-2xl mb-6 text-gray-600">
          Biorunners is a platform designed to empower students, researchers, and innovators by providing them with a unique space to showcase their work, build their brand, and connect with industry leaders. Our marketplace enables seamless collaboration between academia and industry, fueling the future of biotechnology and life sciences in the country.
        </p>

        <div className="flex justify-center space-x-6">
          <Link href="#about">
            <button className="bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300">
              Learn More
            </button>
          </Link>
          <Link href="#Productdisplay">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
              Explore Our Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection1;
