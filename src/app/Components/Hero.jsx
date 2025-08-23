"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Discover Amazing Products <br /> with{" "}
            <span className="text-blue-500">ProductHub</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Your one-stop hub to explore, compare, and manage products. Sign in
            to add your own products and join our growing community!
          </p>

          <div className="flex gap-4">
            <Link
              href="/products"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200"
            >
              Explore Products
            </Link>
            <Link
              href="/login"
              className="border border-gray-400 hover:border-blue-500 px-6 py-3 rounded-lg font-semibold text-gray-200 hover:text-blue-400 transition-all duration-200"
            >
              Sign In
            </Link>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/hero.jpg" // replace with your image in /public
            alt="ProductHub Illustration"
            width={500}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
