
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6 animate-fade-in">
            Landing Page
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> 
              {" "}Development
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            Transform your ideas into stunning web applications with our powerful platform. 
            Create, customize, and deploy with ease - no coding experience required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 transform">
              Get Started Free
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
              Watch Demo
            </button>
          </div>
          
          <div className="mt-16 animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-3xl mx-auto transform hover:scale-105 transition-transform duration-300">
              <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">✨</span>
                  </div>
                  <p className="text-gray-600 text-lg">Beautiful UI Preview</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
