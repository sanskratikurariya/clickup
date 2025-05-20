import React from "react";
import { Link } from "react-router-dom";


const ClickUpLogin = () => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
<a href="/" className="absolute top-4 left-6 z-50 flex items-center space-x-2">
  <div className="w-6 h-6 rotate-45 bg-gradient-to-br from-[#7b68ee] to-[#e355c9] rounded-sm shadow-md " />
    <h1 className="text-xl font-bold text-gray-800">ClickUp</h1>
  <div>
  
     
  </div>
</a>

      {/* Top right sign up */}
      <div className="absolute top-4 right-4 flex items-center space-x-2">
        <p className="text-sm text-black hidden md:block">Don't have an account?</p>
         <Link to="/signup">
        <button className="bg-purple-600 text-white px-4 py-2 rounded">Sign Up</button>
      </Link>
      </div>

      {/* Center login box using flex for better responsiveness */}
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="login shadow-xl rounded-md p-8 w-full max-w-md bg-white z-10">
          <h2 className="text-4xl font-bold mb-6 text-center">Welcome back!</h2>

          {/* Google login */}
          <div className="flex items-center border rounded-md p-3 mb-6 cursor-pointer hover:bg-gray-100">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-6 h-6 mr-3"
            />
            <span className="text-sm text-gray-700">Continue as Sanskrati</span>
          </div>
        

          {/* Email Input */}
          <label className="block mb-2 text-sm text-gray-600 text-left">Work Email</label>
          <input
            type="email"
            placeholder="Enter your work email"
            className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Password Input */}
          <label className="block mb-2 text-left text-sm text-gray-600">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full px-4 py-2 border rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Forgot password */}
          <div className="text-right mb-4">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Log In
          </button>

          {/* SSO text */}
          <div className="mt-4 text-center text-sm text-gray-500">
            or login with SSO
          </div>

          {/* Sign up link */}
          <div className="mt-6 text-center text-sm">
            Don’t have an account?{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient with slant */}
     {/* Pure Gradient Background (No Images) */}
 <div className="absolute bottom-0 left-0 w-full h-[35%] z-0 overflow-hidden pointer-events-none">
      {/* Wavy Gradient Shape */}
      <svg
        className="w-full h-full"
        viewBox="400 0 590 320"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGradient" x1="0" y1="0" x2="2" y2="1">
            <stop offset="0%" stopColor="#210ab9" />
            <stop offset="100%" stopColor="#e355c9" />
          </linearGradient>
        </defs>
        <path
          fill="url(#waveGradient)"
          d="M0,224L48,218.7C96,213,192,203,288,176C384,120,480,107,576,101.3C672,96,768,128,864,133.3C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64V320H0Z"
        />
      </svg>
    </div>


    </div>
  );
};


export default ClickUpLogin;
