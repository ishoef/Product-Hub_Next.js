"use client";

import React from "react";
import { useParams } from "next/navigation";
import { Star } from "lucide-react";

export default function Details() {
  const { id } = useParams();
  const allProducts = [
    {
      id: "1",
      name: "Laptop Pro",
      description: "High-performance laptop for professionals.",
      price: 1200,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80",
      category: "Laptops",
      brand: "TechBrand",
      stock: 25,
      rating: 4.7,
      features: [
        "Intel i7 11th Gen",
        "16GB RAM",
        "512GB SSD",
        "15.6-inch Retina Display",
      ],
      specs: {
        processor: "Intel Core i7",
        ram: "16GB DDR4",
        storage: "512GB SSD",
        display: "15.6-inch 4K Retina",
        battery: "10 hours",
      },
      reviews: [
        { user: "Ali", comment: "Very fast and lightweight.", rating: 5 },
        { user: "Fatima", comment: "Perfect for work.", rating: 4 },
      ],
      images: [
        "https://images.unsplash.com/photo-1608048974883-3c761722fe3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnRwaG9uZSUyMHh8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1510166496147-c42f159653ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c21hcnRwaG9uZSUyMHh8ZW58MHx8MHx8fDA%3D",
      ],
    },
    {
      id: "2",
      name: "Smartphone X",
      description: "Latest smartphone with advanced features.",
      price: 899,
      image:
        "https://images.unsplash.com/photo-1510166089176-b57564a542b1?w=600&auto=format&fit=crop&q=60",
      category: "Smartphones",
      brand: "PhoneMax",
      stock: 50,
      rating: 4.5,
      features: [
        "6.5-inch OLED Display",
        "Triple Camera 48MP",
        "5G Connectivity",
        "Fast Charging",
      ],
      specs: {
        processor: "Snapdragon 888",
        ram: "8GB",
        storage: "256GB",
        camera: "48MP + 12MP + 8MP",
        battery: "4500mAh",
      },
      reviews: [
        { user: "Sara", comment: "Excellent display quality!", rating: 5 },
        { user: "Omar", comment: "Battery drains quickly.", rating: 3 },
      ],
      images: [
        "https://images.unsplash.com/photo-1608048974883-3c761722fe3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnRwaG9uZSUyMHh8ZW58MHx8MHx8fDA%3D",
        "https://images.unsplash.com/photo-1510166496147-c42f159653ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c21hcnRwaG9uZSUyMHh8ZW58MHx8MHx8fDA%3D",
      ],
    },
    {
      id: "3",
      name: "Wireless Headphones",
      description: "Noise-cancelling wireless headphones.",
      price: 250,
      image:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=500&q=80",
      category: "Accessories",
      brand: "SoundMax",
      stock: 100,
      rating: 4.6,
      features: [
        "Noise Cancellation",
        "Bluetooth 5.0",
        "40 Hours Battery",
        "Comfort Fit",
      ],
      specs: {
        type: "Over-Ear",
        connectivity: "Bluetooth 5.0",
        battery: "40 Hours",
        weight: "250g",
      },
      reviews: [
        { user: "Yusuf", comment: "Best headphones I’ve used.", rating: 5 },
        { user: "Aisha", comment: "Comfortable for long use.", rating: 4 },
      ],
      images: [
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
        "https://images.unsplash.com/photo-1585386959984-a415522b6fa3",
      ],
    },
    {
      id: "4",
      name: "Smartwatch",
      description: "Track your health and stay connected.",
      price: 299,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80",
      category: "Wearables",
      brand: "TimeTech",
      stock: 80,
      rating: 4.3,
      features: [
        "Heart Rate Monitor",
        "GPS Tracking",
        "Water Resistant",
        "NFC",
      ],
      specs: {
        display: "1.5-inch AMOLED",
        battery: "5 days",
        connectivity: "Bluetooth 5.1",
        weight: "45g",
      },
      reviews: [
        { user: "Karim", comment: "Great for fitness tracking.", rating: 4 },
        { user: "Layla", comment: "Sleek and stylish.", rating: 5 },
      ],
      images: [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
        "https://images.unsplash.com/photo-1579586337278-3befd40fd17a",
      ],
    },
    {
      id: "5",
      name: "Gaming Mouse",
      description: "Precision RGB gaming mouse for pro gamers.",
      price: 75,
      image:
        "https://images.unsplash.com/photo-1628832307345-7404b47f1751?w=600&auto=format&fit=crop&q=60",
      category: "Accessories",
      brand: "ProGamer",
      stock: 200,
      rating: 4.4,
      features: ["RGB Lighting", "High DPI Sensor", "Programmable Buttons"],
      specs: {
        type: "Wired",
        dpi: "16000",
        buttons: "7",
        weight: "100g",
      },
      reviews: [
        { user: "Hassan", comment: "Perfect for FPS games.", rating: 5 },
        { user: "Nour", comment: "RGB is awesome!", rating: 4 },
      ],
      images: [
        "https://images.unsplash.com/photo-1628832307345-7404b47f1751",
        "https://images.unsplash.com/photo-1587202372775-98983f5cb1bb",
      ],
    },
    {
      id: "6",
      name: "Mechanical Keyboard",
      description: "RGB backlit mechanical keyboard with tactile feedback.",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1618586810102-aaa7049200c0?w=600&auto=format&fit=crop&q=60",
      category: "Accessories",
      brand: "KeyMaster",
      stock: 120,
      rating: 4.5,
      features: ["Mechanical Switches", "RGB Backlight", "Ergonomic Design"],
      specs: {
        type: "Mechanical",
        connectivity: "Wired USB",
        switch: "Cherry MX Blue",
        weight: "900g",
      },
      reviews: [
        { user: "Bilal", comment: "Typing feels amazing.", rating: 5 },
        { user: "Ola", comment: "A bit loud, but great quality.", rating: 4 },
      ],
      images: [
        "https://images.unsplash.com/photo-1618586810102-aaa7049200c0",
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
      ],
    },
    {
      id: "7",
      name: "4K Monitor",
      description:
        "Ultra HD 4K monitor with vivid colors and high refresh rate.",
      price: 450,
      image:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=500&q=80",
      category: "Monitors",
      brand: "ViewMax",
      stock: 60,
      rating: 4.6,
      features: ["4K UHD", "144Hz Refresh Rate", "IPS Panel"],
      specs: {
        size: "27-inch",
        resolution: "3840x2160",
        refreshRate: "144Hz",
        ports: "HDMI, DisplayPort",
      },
      reviews: [
        { user: "Sami", comment: "Colors are vibrant.", rating: 5 },
        { user: "Mariam", comment: "Perfect for gaming.", rating: 4 },
      ],
      images: [
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45",
        "https://images.unsplash.com/photo-1585386959984-a415522b6fa3",
      ],
    },
    {
      id: "8",
      name: "Bluetooth Speaker",
      description: "Portable speaker with deep bass and long battery life.",
      price: 99,
      image:
        "https://images.unsplash.com/photo-1598034989845-48532781987e?w=600&auto=format&fit=crop&q=60",
      category: "Audio",
      brand: "SoundWave",
      stock: 150,
      rating: 4.2,
      features: ["Portable", "Deep Bass", "12 Hours Playtime"],
      specs: {
        connectivity: "Bluetooth 5.0",
        battery: "12 Hours",
        weight: "500g",
      },
      reviews: [
        { user: "Ahmed", comment: "Bass is amazing!", rating: 5 },
        { user: "Salma", comment: "Battery lasts long.", rating: 4 },
      ],
      images: [
        "https://images.unsplash.com/photo-1598034989845-48532781987e",
        "https://images.unsplash.com/photo-1615392772395-f1864b84c4c2",
      ],
    },
    {
      id: "9",
      name: "Drone 4K",
      description: "High-quality drone with 4K camera for aerial photography.",
      price: 799,
      image:
        "https://images.unsplash.com/photo-1508614589041-895b88991e3c?w=600&auto=format&fit=crop&q=60",
      category: "Drones",
      brand: "SkyView",
      stock: 30,
      rating: 4.6,
      features: [
        "4K Camera",
        "GPS Auto Return",
        "30 min Flight Time",
        "Stabilization Gimbal",
      ],
      specs: {
        camera: "4K UHD",
        flightTime: "30 minutes",
        range: "5km",
        battery: "4500mAh",
      },
      reviews: [
        { user: "Imran", comment: "Amazing for aerial shots.", rating: 5 },
        { user: "Lina", comment: "Battery could be better.", rating: 4 },
      ],
      images: [
        "https://images.unsplash.com/photo-1508614589041-895b88991e3c",
        "https://images.unsplash.com/photo-1508615070457-7baeba4003a0",
      ],
    },
    {
      id: "10",
      name: "Fitness Tracker",
      description: "Track steps, sleep, and workouts with ease.",
      price: 150,
      image:
        "https://images.unsplash.com/photo-1598971639058-3f7b7e0f6b8b?w=600&auto=format&fit=crop&q=60",
      category: "Wearables",
      brand: "FitLife",
      stock: 200,
      rating: 4.3,
      features: ["Step Counter", "Heart Rate Monitor", "Water Resistant"],
      specs: {
        display: "OLED",
        battery: "7 Days",
        connectivity: "Bluetooth 5.0",
        weight: "35g",
      },
      reviews: [
        { user: "Nadia", comment: "Keeps me motivated daily!", rating: 5 },
        { user: "Khalid", comment: "Accurate tracking.", rating: 4 },
      ],
      images: [
        "https://images.unsplash.com/photo-1598971639058-3f7b7e0f6b8b",
        "https://images.unsplash.com/photo-1557434440-8db1cb0c9b6b",
      ],
    },
    {
      id: "11",
      name: "Tablet Pro",
      description: "Lightweight tablet with powerful performance.",
      price: 650,
      image:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&auto=format&fit=crop&q=60",
      category: "Tablets",
      brand: "TabMax",
      stock: 70,
      rating: 4.5,
      features: ["12-inch Retina Display", "Stylus Support", "Fast Charging"],
      specs: {
        processor: "A14 Bionic",
        ram: "6GB",
        storage: "256GB",
        battery: "12 Hours",
      },
      reviews: [
        { user: "Omar", comment: "Perfect for drawing and notes.", rating: 5 },
        { user: "Huda", comment: "Very lightweight.", rating: 4 },
      ],
      images: [
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
        "https://images.unsplash.com/photo-1611078489935-76e95d85f1e5",
      ],
    },
    {
      id: "12",
      name: "Smart Home Hub",
      description: "Control all your smart devices with one hub.",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1581091870686-3b5de0f3d0a4?w=600&auto=format&fit=crop&q=60",
      category: "Smart Home",
      brand: "HomeEase",
      stock: 110,
      rating: 4.4,
      features: [
        "Voice Assistant",
        "Smart Device Control",
        "Wi-Fi & Bluetooth",
      ],
      specs: {
        connectivity: "Wi-Fi + Bluetooth",
        voiceAssistant: "Yes",
        weight: "250g",
      },
      reviews: [
        { user: "Yara", comment: "Controls my entire home.", rating: 5 },
        { user: "Hassan", comment: "Sometimes lags with Wi-Fi.", rating: 3 },
      ],
      images: [
        "https://images.unsplash.com/photo-1581091870686-3b5de0f3d0a4",
        "https://images.unsplash.com/photo-1616444796964-d1e6f9e8bb5c",
      ],
    },
    {
      id: "13",
      name: "VR Headset",
      description: "Immersive VR experience for gaming and media.",
      price: 499,
      image:
        "https://images.unsplash.com/photo-1628277315209-c3f3d39ac49e?w=600&auto=format&fit=crop&q=60",
      category: "VR",
      brand: "ImmersiTech",
      stock: 40,
      rating: 4.7,
      features: ["6DOF Tracking", "High-Res Display", "Wireless"],
      specs: {
        resolution: "2160x1200",
        refreshRate: "90Hz",
        weight: "470g",
      },
      reviews: [
        { user: "Ali", comment: "Mind-blowing VR games!", rating: 5 },
        { user: "Fatima", comment: "Setup was easy.", rating: 4 },
      ],
      images: [
        "https://images.unsplash.com/photo-1628277315209-c3f3d39ac49e",
        "https://images.unsplash.com/photo-1606813902915-10b8b6d4ef3f",
      ],
    },
    {
      id: "14",
      name: "SSD 1TB",
      description: "Ultra-fast SSD for quick boot and load times.",
      price: 150,
      image:
        "https://images.unsplash.com/photo-1587202372775-98983f5cb1bb?w=600&auto=format&fit=crop&q=60",
      category: "Storage",
      brand: "SpeedDrive",
      stock: 300,
      rating: 4.8,
      features: ["1TB Storage", "Fast Read/Write", "Durable Build"],
      specs: {
        type: "NVMe",
        capacity: "1TB",
        readSpeed: "3500MB/s",
        writeSpeed: "3000MB/s",
      },
      reviews: [
        { user: "Samir", comment: "Boots Windows in seconds.", rating: 5 },
        { user: "Aya", comment: "Super reliable.", rating: 5 },
      ],
      images: [
        "https://images.unsplash.com/photo-1587202372775-98983f5cb1bb",
        "https://images.unsplash.com/photo-1627083751288-cdf22fcb6d92",
      ],
    },
    {
      id: "15",
      name: "Action Camera",
      description: "Capture adventures in stunning 4K.",
      price: 300,
      image:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&auto=format&fit=crop&q=60",
      category: "Cameras",
      brand: "AdventureCam",
      stock: 90,
      rating: 4.5,
      features: ["4K Recording", "Waterproof", "Image Stabilization"],
      specs: {
        resolution: "4K",
        waterproof: "Yes (up to 30m)",
        battery: "2 Hours",
      },
      reviews: [
        { user: "Othman", comment: "Great for diving trips.", rating: 5 },
        { user: "Hiba", comment: "Video quality is amazing.", rating: 4 },
      ],
      images: [
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
        "https://images.unsplash.com/photo-1602848597222-7e7fa05afd32",
      ],
    },
    {
      id: "16",
      name: "Wireless Earbuds",
      description: "Compact earbuds with crystal-clear sound.",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1606813902915-10b8b6d4ef3f?w=600&auto=format&fit=crop&q=60",
      category: "Audio",
      brand: "SoundBeats",
      stock: 180,
      rating: 4.4,
      features: ["Noise Cancellation", "Touch Controls", "20 Hours Battery"],
      specs: {
        connectivity: "Bluetooth 5.2",
        battery: "20 Hours",
        waterproof: "IPX5",
      },
      reviews: [
        { user: "Amira", comment: "Best sound for the price.", rating: 5 },
        { user: "Tariq", comment: "Fits comfortably.", rating: 4 },
      ],
      images: [
        "https://images.unsplash.com/photo-1606813902915-10b8b6d4ef3f",
        "https://images.unsplash.com/photo-1605456502085-6cc5d72a43ce",
      ],
    },
  ];
  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-300 text-lg">
        Product not found 🚫
      </div>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/* Product Image Gallery */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="rounded-xl shadow-lg w-full h-96 object-cover"
          />
          <div className="flex gap-3 mt-4">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${product.name}-${i}`}
                className="w-20 h-20 rounded-lg border border-gray-700 object-cover cursor-pointer hover:scale-105 transition"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-white">{product.name}</h1>
          <p className="mt-2 text-gray-400">{product.description}</p>

          {/* Price & Stock */}
          <div className="mt-4 flex items-center gap-6">
            <p className="text-2xl font-semibold text-blue-400">
              ${product.price}
            </p>
            <p className="text-sm">
              Stock:{" "}
              <span
                className={`${
                  product.stock > 50 ? "text-green-400" : "text-red-400"
                } font-medium`}
              >
                {product.stock} left
              </span>
            </p>
          </div>

          {/* Ratings */}
          <div className="flex items-center mt-3 text-yellow-400">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                size={20}
                fill={i < Math.floor(product.rating) ? "currentColor" : "none"}
                stroke="currentColor"
              />
            ))}
            <span className="ml-2 text-gray-300 text-sm">
              {product.rating.toFixed(1)} / 5
            </span>
          </div>

          {/* Features */}
          {product.features && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-white">Features</h2>
              <ul className="mt-2 space-y-1 list-disc list-inside text-gray-300">
                {product.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Specs */}
          {product.specs && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold text-white">
                Specifications
              </h2>
              <div className="grid grid-cols-2 gap-3 mt-2 text-gray-300">
                {Object.entries(product.specs).map(([key, value], i) => (
                  <div
                    key={i}
                    className="p-2 bg-gray-800 rounded-lg shadow-sm border border-gray-700"
                  >
                    <span className="font-medium capitalize">{key}:</span>{" "}
                    {value}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Add to Cart */}
          <button className="mt-6 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg shadow-md transition-colors">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Reviews */}
      {product.reviews && (
        <div className="max-w-5xl mx-auto px-6 mt-16">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Customer Reviews
          </h2>
          <div className="space-y-4">
            {product.reviews.map((review, i) => (
              <div
                key={i}
                className="p-4 bg-gray-800 rounded-lg shadow-md border border-gray-700"
              >
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-white">{review.user}</p>
                  <div className="flex text-yellow-400">
                    {Array.from({ length: 5 }, (_, star) => (
                      <Star
                        key={star}
                        size={16}
                        fill={
                          star < Math.floor(review.rating)
                            ? "currentColor"
                            : "none"
                        }
                        stroke="currentColor"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mt-1">“{review.comment}”</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}