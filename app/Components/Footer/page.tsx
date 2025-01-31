import React from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footerpage = () => {
  return (
    <div>
      {/* Footer Section */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold text-blue-200 mb-4">About Biorunners</h2>
            <p className="text-sm">
              An innovative lifesciences&apos; support hub dedicated to bridging gap between academia and industry in Pakistan.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-2xl font-bold text-blue-200 mb-4">Quick Links</h2>
            <ul className="text-sm space-y-2">
              <li>
                <Link href="/" passHref>
                  <span className="hover:text-gray-500 transition-colors duration-300 cursor-pointer">Home</span>
                </Link>
              </li>
              <li>
                <Link href="#Productdisplay" passHref>
                  <span className="hover:text-gray-500 transition-colors duration-300 cursor-pointer">Products</span>
                </Link>
              </li>
              <li>
                <Link href="#Services" passHref>
                  <span className="hover:text-gray-500 transition-colors duration-300 cursor-pointer">Services</span>
                </Link>
              </li>
              <li>
                <Link href="/Components/Contact" passHref>
                  <span className="hover:text-gray-500 transition-colors duration-300 cursor-pointer">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-blue-200 mb-4">Contact Us</h2>
            <p className="text-sm">Email: biorunners@gmail.com</p>

            <div className="flex space-x-4 mt-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-blue-500 hover:text-blue-700 text-2xl" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-pink-500 hover:text-pink-700 text-2xl" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-blue-400 hover:text-blue-600 text-2xl" />
              </Link>
            </div>
          </div>
        </div>

        {/* Line above the footer content */}
        <div className="border-t border-gray-700 mt-8"></div>

        {/* Footer Bottom */}
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 mt-4 space-y-4 md:space-y-0">
          {/* Left Side: Designer's Credit */}
          <p className="text-sm text-center md:text-left">
            Designed and Created by Tuba Nafees
          </p>

          {/* Right Side: Company Information and Links */}
          <p className="text-sm text-center md:text-right">
            &copy; 2025 Biorunners. All rights reserved. |
            <Link
              href="/privacy-policy"
              className="text-teal-400 hover:underline ml-2"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footerpage;
