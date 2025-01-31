import { 
  FaHome, 
  FaRegLightbulb, 
  FaBox, 
  FaPhoneAlt, 
  FaSignInAlt, 
  FaLightbulb 
} from "react-icons/fa"; // Importing necessary icons
import Link from "next/link"; // For navigation links

export default function Header() {
  return (
    <header className="bg-white text-black py-4 shadow-md border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo as text */}
        <h1 className="text-2xl font-bold text-blue-500">Biorunners</h1>

        {/* Navigation Menu */}
        <nav className="flex space-x-8">
          {/* About Link */}
          <div className="flex items-center space-x-2">
            <FaHome className="text-black hover:text-gray-500 transition-colors duration-300" />
            <Link href="/" passHref>
              <span className="hover:text-gray-500 transition-colors duration-300 cursor-pointer">About</span>
            </Link>
          </div>

          {/* Products Link */}
          <div className="flex items-center space-x-2">
            <FaRegLightbulb className="text-black hover:text-gray-500 transition-colors duration-300" />
            <Link href="#Productdisplay" passHref scroll={true}>
              <span className="hover:text-gray-500 transition-colors duration-300 cursor-pointer">Products</span>
            </Link>
          </div>

          {/* Services Link */}
          <div className="flex items-center space-x-2">
            <FaBox className="text-black hover:text-gray-500 transition-colors duration-300" />
            <Link href="/Components/Services" passHref scroll={true}>
              <span className="hover:text-gray-500 transition-colors duration-300 cursor-pointer">Courses</span>
            </Link>
          </div>

          {/* Contact Link */}
          <div className="flex items-center space-x-2">
            <FaPhoneAlt className="text-black hover:text-gray-500 transition-colors duration-300" />
            <Link href="/Components/Contact" passHref>
              <span className="hover:text-gray-500 transition-colors duration-300 cursor-pointer">Contact</span>
            </Link>
          </div>

          {/* Idea Bank Link */}
          <div className="flex items-center space-x-2">
            <FaLightbulb className="text-black hover:text-gray-500 transition-colors duration-300" />
            <Link href="/Components/Ideabank" passHref>
              <span className="hover:text-gray-500 transition-colors duration-300 cursor-pointer">Idea Bank</span>
            </Link>
          </div>

          {/* Login Link */}
          <div className="flex items-center space-x-2">
            <FaSignInAlt className="text-black hover:text-gray-500 transition-colors duration-300" />
            <Link href="/login" passHref>
              <span className="hover:text-gray-500 transition-colors duration-300 cursor-pointer">Login</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
