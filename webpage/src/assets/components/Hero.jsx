import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://cdn.prod.website-files.com/677425503944c4eb93bd17ad/6898fa26dd1bc004aac50a16_jrc-palladio-hero.webp')",
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 drop-shadow-lg">
          Welcome to Our Website
        </h1>

        <p className="max-w-3xl text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed mb-6 sm:mb-8">
          Discover inspiring stories, innovative ideas, and extraordinary speakers who are shaping the future.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ipsum quasi fugit dolor nobis quibusdam.
        </p>

        <button className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white text-base sm:text-lg md:text-xl lg:text-2xl font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-lg hover:shadow-orange-500/50 hover:scale-105 transition-transform duration-300">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Hero;
