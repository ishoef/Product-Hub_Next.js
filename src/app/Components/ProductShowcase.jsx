"use client";

import React from "react";
import Link from "next/link";

export const products = [
  {
    id: "1",
    name: "Laptop Pro",
    description: "High-performance laptop for professionals.",
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "2",
    name: "Smartphone X",
    description: "Latest smartphone with advanced features.",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1510166089176-b57564a542b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c21hcnRwaG9uZSUyMHh8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "3",
    name: "Wireless Headphones",
    description: "Noise-cancelling wireless headphones.",
    price: 250,
    image:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "4",
    name: "Smartwatch",
    description: "Track your health and stay connected.",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "5",
    name: "Gaming Mouse",
    description: "Precision RGB gaming mouse for pro gamers.",
    price: 75,
    image:
      "https://images.unsplash.com/photo-1628832307345-7404b47f1751?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R2FtaW5nJTIwTW91c2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "6",
    name: "Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard with tactile feedback.",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1618586810102-aaa7049200c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TWVjaGFuaWNhbCUyMEtleWJvYXJkfGVufDB8fDB8fHww",
  },
  {
    id: "7",
    name: "4K Monitor",
    description: "Ultra HD 4K monitor with vivid colors and high refresh rate.",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "8",
    name: "Bluetooth Speaker",
    description: "Portable speaker with deep bass and long battery life.",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1598034989845-48532781987e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEJsdWV0b290aCUyMFNwZWFrZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "9",
    name: "Drone Pro",
    description: "High-end drone with 4K camera and GPS stabilization.",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "10",
    name: "Fitness Tracker",
    description: "Track your steps, heart rate, and sleep patterns.",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1585386959984-a415522b6fa3?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "11",
    name: "Tablet Pro",
    description: "Lightweight tablet with a high-resolution display.",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "12",
    name: "Smart Home Hub",
    description: "Control your smart devices with a single hub.",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1581291519195-ef11498d1cf0?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "13",
    name: "VR Headset",
    description: "Immersive virtual reality headset for gaming and media.",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1590608897129-79d6e1b01c34?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "14",
    name: "External SSD",
    description: "Fast portable storage drive with 1TB capacity.",
    price: 179,
    image:
      "https://images.unsplash.com/photo-1614821814342-f3fdd91de3b0?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "15",
    name: "Action Camera",
    description: "Compact camera for capturing adventures in 4K.",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1581978584894-fd5f230e07cd?auto=format&fit=crop&w=500&q=80",
  },
  {
    id: "16",
    name: "Noise-Cancelling Earbuds",
    description: "Wireless earbuds with active noise cancellation.",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1615392772395-f1864b84c4c2?auto=format&fit=crop&w=500&q=80",
  },
];

const sixProducts = products.slice(0, 8);

export default function ProductShowcase() {
  return (
    <section className="py-16 bg-gray-800 text-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Featured Products
          </h2>
          <p className="text-gray-300 mt-2">Explore our top picks for you</p>
        </div>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {sixProducts.map((product) => (
            <div
              key={product.id}
              className="bg-gray-900 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover"
              />

              {/* Product Info */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-white">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-400 mt-2 flex-grow">
                  {product.description}
                </p>
                <p className="mt-3 text-blue-400 font-bold">${product.price}</p>

                <Link
                  href={`/products/${product.id}`}
                  className="mt-4 inline-block text-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
