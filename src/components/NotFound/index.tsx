import React from 'react';
import { ArrowLeft, Home, Search } from 'iconoir-react';

const NotFound: React.FC = () => {
  const goBack = () => {
    window.history.back();
  };

  const goHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/src/assets/circuit-pattern.jpg')] opacity-10 bg-repeat"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 leading-none">
            404
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Error Message */}
        <div className="mb-8 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Oops! It looks like you've wandered into uncharted territory. The page you're looking
            for doesn't exist in our hackathon universe.
          </p>
          <p className="text-sm text-gray-400">
            Don't worry though - even the best hackers hit a 404 sometimes!
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button
            onClick={goHome}
            className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Go Home
          </button>

          <button
            onClick={goBack}
            className="group flex items-center gap-2 px-6 py-3 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-105"
          >
            <ArrowLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Go Back
          </button>
        </div>

        {/* Helpful Links */}
        <div className="space-y-3">
          <p className="text-gray-400 text-sm mb-4">Or try these popular pages:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/#hero"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200 hover:underline"
            >
              Event Info
            </a>
            <a
              href="/#schedule"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200 hover:underline"
            >
              Schedule
            </a>
            <a
              href="/#register"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200 hover:underline"
            >
              Register
            </a>
            <a
              href="/#faq"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200 hover:underline"
            >
              FAQ
            </a>
          </div>
        </div>

        {/* Fun Easter Egg */}
        <div className="mt-12 p-4 bg-slate-800/50 rounded-lg border border-gray-700 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
            <Search className="w-4 h-4" />
            <span>
              Fun fact: This 404 page was probably coded faster than most hackathon projects!
            </span>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40 delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse opacity-50 delay-500"></div>
      </div>
    </div>
  );
};

export default NotFound;
