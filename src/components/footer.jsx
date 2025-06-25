// Footer.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Company Name</h3>
            <p className="text-gray-300">
              Making the world a better place through innovative solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="hover:text-blue-400">
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a href="https://facebook.com" className="hover:text-blue-600">
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a href="https://instagram.com" className="hover:text-pink-600">
                <i className="fab fa-instagram text-xl"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigate("/about")}
                  className="text-gray-300 hover:text-white"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/services")}
                  className="text-gray-300 hover:text-white"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/contact")}
                  className="text-gray-300 hover:text-white"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Support</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigate("/faq")}
                  className="text-gray-300 hover:text-white"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/privacy")}
                  className="text-gray-300 hover:text-white"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/terms")}
                  className="text-gray-300 hover:text-white"
                >
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <p>123 Business Street</p>
              <p>City, State 12345</p>
              <p>Email: info@company.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
