import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const ClickUpLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

    const location = useLocation();
  const successMessage = location.state?.message || '';

  useEffect(() => {
    const token = localStorage.getItem('token'); // or localStorage
    if (token) {
      // User is already logged in
      navigate('/');
    }
  }, []);

  const handleError = () => {
    let errorMsg = "";
    if (!email) {
      errorMsg = "Please enter a valid e-mail";
      setError(prev => { return { ...prev, email: "Please enter a valid e-mail" } })
    }
    if (!password) {
      errorMsg = "Please enter a valid password";
      setError(prev => { return { ...prev, password: "Please enter a valid password" } })
    }
    return errorMsg;
  }

  const handleLogin = async () => {
    if (handleError()) {
      return;
    }

    const res = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();

    if (!res.ok) {
      setError(prev => { return { ...prev, error: "Wrong email or password" } })
    } else {
      if (data.token) {
        localStorage.setItem('token', data.token);
        navigate('/');
      }
    }
  }

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

          {successMessage && <div className="text-green-600 mb-4">{successMessage}</div>}

          {/* Google login */}
          <a href="http://localhost:5000/api/auth/google">
            <div className="flex items-center border rounded-md p-3 mb-6 cursor-pointer hover:bg-gray-100">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-6 h-6 mr-3"
              />
              <span className="text-sm text-gray-700">Continue With Google</span>
            </div>
          </a>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block mb-2 text-sm text-gray-600 text-left">Work Email</label>
            <input
              type="email"
              placeholder="Enter your work email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError({});
              }}
            />
            {error.email && <div className="text-red-600">{error.email}</div>}
          </div>

          {/* Password Input */}
          <div className="mb-2">
            <label className="block mb-2 text-left text-sm text-gray-600">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError({});
              }}
            />
            {error.password && <div className="text-red-600">{error.password}</div>}
          </div>

          {error.error && <div className="text-red-600 mb-2">{error.error}</div>}

          {/* Forgot password */}
          <div className="text-right mb-4">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button onClick={handleLogin} className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Log In
          </button>

          {/* SSO text */}
          <div className="mt-4 text-center text-sm text-gray-500">
            or login with SSO
          </div>

          {/* Sign up link */}
          <div className="mt-6 text-center text-sm">
            Don’t have an account?{" "}
            <a href="/signup" className="text-blue-600 hover:underline">
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
