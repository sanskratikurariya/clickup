import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="relative min-h-screen bg-white overflow-hidden">
            {/* Logo/Brand - Top Left */}
            <a href="/" className="absolute top-4 left-4 z-50 flex items-center space-x-2">
                <div className="w-6 h-6 rotate-45 bg-gradient-to-br from-[#7b68ee] to-[#e355c9] rounded-sm shadow-md" />
                <h1 className="text-xl font-bold text-gray-800">ClickUp</h1>
            </a>

            {/* Top Right Login */}
            <div className="absolute top-4 right-4 flex items-center space-x-2">
                <p className="text-sm text-black hidden sm:block">Already play with ClickUp?</p>
                <Link to="/">
                    <button className="bg-purple-600 text-white px-4 py-1 rounded-lg hover:bg-purple-700 transition">
                        Login
                    </button>
                </Link>
            </div>

            {/* Signup Form */}
            <div className="flex items-center justify-center min-h-screen px-4 py-8">
                <form className="w-full max-w-md sm:max-w-md md:max-w-md bg-white shadow-xl rounded-xl p-6 sm:p-8 md:p-10 z-10" autoComplete="off">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Seconds to Signup!</h2>

                    {/* Google login */}
                    <div className="flex items-center border rounded-md p-3 mb-6 cursor-pointer hover:bg-gray-100">
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="Google"
                            className="w-6 h-6 mr-3"
                        />
                        <span className="text-sm text-gray-700">Continue as Sanskrati</span>
                    </div>

                    {/* Name */}
                    <label className="block mb-1 text-sm text-gray-600 text-left">Name</label>
                    <input
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        autoComplete="new-name"
                        className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {/* Email */}
                    <label className="block mb-1 text-sm text-gray-600 text-left">Work Email</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter your work email"
                        autoComplete="new-email"
                        className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {/* Password */}
                    <label className="block mb-1 text-sm text-gray-600 text-left">Password</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Enter password"
                        autoComplete="new-password"
                        className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {/* Button */}
                    <button className="w-full bg-purple-700 font-bold text-white py-3 rounded-lg hover:bg-purple-800 transition mt-2">
                        Play with ClickUp
                    </button>
                </form>
            </div>

            {/* Bottom wave */}
            <div className="absolute bottom-0 left-0 w-full h-[30%] z-0 overflow-hidden pointer-events-none">
                <svg
                    className="w-full h-full"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <linearGradient id="waveGradient" x1="1" y1="0" x2="0" y2="1">
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

export default Signup;
