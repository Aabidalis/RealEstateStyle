import React from "react";
import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-8 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16">
        
        {/* Left Section */}
        <div className="flex flex-col items-start space-y-8">
          <img
            className="h-30 w-auto"
            src="https://cdn.prod.website-files.com/677425503944c4eb93bd17ad/6898ff5e96f0cb3ab4f1482e_palladio-logo.webp"
            alt="Company Logo"
          />

          <button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white text-lg font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-orange-500/40 hover:scale-105 transition-transform duration-300">
            ENQUIRE NOW
          </button>

          <div>
            <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
            <div className="flex gap-6">
              <Instagram className="w-6 h-6 cursor-pointer hover:text-orange-400 transition-colors" />
              <Facebook className="w-6 h-6 cursor-pointer hover:text-blue-500 transition-colors" />
              <Twitter className="w-6 h-6 cursor-pointer hover:text-sky-400 transition-colors" />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-start space-y-6">
          <h1 className="text-4xl font-bold text-orange-400">Get In Touch</h1>

          <div>
            <h3 className="text-lg font-semibold text-gray-300">Phone</h3>
            <p className="text-gray-400 hover:text-white transition-colors">
              +91 89565 6546
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-300">Email</h3>
            <p className="text-gray-400 hover:text-white transition-colors">
              chomusingh@gmail.com
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-300">Address</h3>
            <p className="text-gray-400 max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem,
              tempore.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-lg">
        © {new Date().getFullYear()} Palladio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
