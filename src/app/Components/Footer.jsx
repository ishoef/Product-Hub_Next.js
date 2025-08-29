import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-400 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">ProductHub</h2>
          <p className="text-sm mt-3 leading-relaxed text-gray-400">
            Discover and manage products with ease. Add your own products and
            join our growing community.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
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
                href="/login"
                className="hover:text-blue-400 transition-colors duration-200"
              >
                Sign In
              </Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-5 text-gray-400">
            <Link
              href="https://twitter.com"
              target="_blank"
              className="hover:text-blue-400 transition-colors duration-200"
            >
              <Twitter size={22} />
            </Link>
            <Link
              href="https://facebook.com"
              target="_blank"
              className="hover:text-blue-500 transition-colors duration-200"
            >
              <Facebook size={22} />
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              className="hover:text-pink-400 transition-colors duration-200"
            >
              <Instagram size={22} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
        <p className="mb-2">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">ProductHub</span>. All
          rights reserved.
        </p>
        <p>
          Built with <span className="text-red-500">❤️</span> by{" "}
          <a
            href="https://ismailnayef.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 underline transition-colors"
          >
            Ismail Nayef
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
