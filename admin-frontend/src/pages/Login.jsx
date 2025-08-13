import React from 'react'
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";

function login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-300 to-blue-600">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 w-full max-w-md shadow-lg border border-white/20">
        {/* Profile Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-blue-800 text-white p-4 rounded-full">
            <FaUser size={28} />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-white text-lg tracking-widest mb-8">
          ADMIN LOGIN
        </h2>

        {/* Email Input */}
        <div className="flex items-center border-b border-white/50 mb-6 pb-2 text-white">
          <FaEnvelope className="mr-3 opacity-70" />
          <input
            type="email"
            placeholder="Email ID"
            className="bg-transparent outline-none flex-1 text-white placeholder-white/70"
          />
        </div>

        {/* Password Input */}
        <div className="flex items-center border-b border-white/50 mb-4 pb-2 text-white">
          <FaLock className="mr-3 opacity-70" />
          <input
            type="password"
            placeholder="Password"
            className="bg-transparent outline-none flex-1 text-white placeholder-white/70"
          />
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between text-sm mb-8">
          <label className="flex items-center text-white/80">
            <input
              type="checkbox"
              className="mr-2 accent-blue-500"
            />
            Remember me
          </label>
          <a href="#" className="text-white/80 hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <button className="w-full bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800 transition duration-300 tracking-widest">
          LOGIN
        </button>
      </div>
    </div>
  )
}

export default login