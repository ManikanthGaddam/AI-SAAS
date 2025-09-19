import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-20 xl:px-32 relative flex flex-col w-full justify-center bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen">
      {/* Text Section */}
      <div className="text-center mb-6">
        <h1
          className="text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]"
        >
          Create amazing content <br />
          <span className="text-primary">with AI tools at ONE place</span>
        </h1>
        <p className="mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum id
          eveniet quisquam est deserunt consequatur ipsam doloribus optio
          laboriosam natus molestias voluptatum non nulla praesentium ratione
          totam quae, alias distinctio.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4 text-sm max-sm:text-xs">
        <button
          onClick={() => navigate("/ai")}
          className="bg-primary text-white px-10 py-3 rounded-lg hover:scale-105 active:scale-95 transition-transform cursor-pointer"
        >
          Start creating now
        </button>
        <button className="text-black px-10 py-3 rounded-lg border border-gray-300 hover:scale-105 active:scale-95 transition-transform cursor-pointer">
          Watch demo
        </button>
      </div>

      {/* Trusted by */}
      <div className="flex items-center gap-4 mt-8 mx-auto text-gray-600">
        <img src={assets.user_group} alt="Users" className="h-8" />
        <span>Trusted by 10k+ people</span>
      </div>
    </div>
  );
};

export default Hero;
