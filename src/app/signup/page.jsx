// app/signup/page.jsx
import React from "react";

export default function SignUp() {
  return (
    <div className="min-h-screen p-8 flex items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-4">
      <div className="max-w-md w-full bg-gray-900 rounded-2xl shadow-2xl p-8">
        <h2 className="text-3xl font-bold text-white text-center">
          Create Account
        </h2>
        <p className="text-gray-300 text-center mt-2">Sign up to get started</p>

        <form className="mt-6 space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="mt-1 w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="mt-1 w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-300"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Re-enter your password"
              className="mt-1 w-full px-4 py-3 rounded-lg bg-gray-800 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <button
            type="submit"
            className="cursor-pointer w-full py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg shadow-lg transition-colors"
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-700" />
          <span className="mx-2 text-gray-400">or</span>
          <hr className="flex-grow border-gray-700" />
        </div>

        <div className="flex gap-4">
          <button className="cursor-pointer flex-1 py-3 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-lg transition-colors">
            Google
          </button>
          <button className="cursor-pointer flex-1 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg transition-colors">
            Facebook
          </button>
        </div>

        <p className="mt-6 text-center text-gray-300 text-sm">
          Already have an account?{" "}
          <a
            href="/login"
            className="cursor-pointer text-purple-400 hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
