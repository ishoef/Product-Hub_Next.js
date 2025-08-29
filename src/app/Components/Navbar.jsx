"use client";

import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full fixed top-0 z-50 bg-gray-900 shadow-md">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4 text-white">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Product<span className="text-blue-400">Hub</span>
        </Link>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <li>
            <Link
              href="/"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/addproduct"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Add Product
            </Link>
          </li>
        </ul>

        {/* Action Button */}
        <div>
          <Link
            href="/login"
            className="bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-200"
          >
            Sign In
          </Link>
        </div>
      </nav>
    </header>
  );
}
