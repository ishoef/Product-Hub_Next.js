"use client";
import { useState } from "react";

export default function AddProductForm() {
  const [form, setForm] = useState({
    productName: "",
    category: "",
    price: "",
    description: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Submitted:", form);
    // You can add API call logic here if needed
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-3xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">➕ Add New Product</h2>
        <p className="mb-6 text-gray-400">
          Create a new digital product listing for your store
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Product Name</label>
            <input
              type="text"
              name="productName"
              value={form.productName}
              onChange={handleChange}
              placeholder="Enter product name"
              className="w-full bg-gray-700 text-white px-4 py-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Category</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full bg-gray-700 text-white px-4 py-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select category</option>
              <option value="ebooks">Ebooks</option>
              <option value="templates">Templates</option>
              <option value="software">Software</option>
              <option value="music">Music</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Price</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="0.00"
              className="w-full bg-gray-700 text-white px-4 py-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter product description"
              rows="4"
              className="w-full bg-gray-700 text-white px-4 py-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Image URL (Single Image)
            </label>
            <input
              type="url"
              name="imageUrl"
              value={form.imageUrl}
              onChange={handleChange}
              placeholder="https://example.com/image.png"
              className="w-full bg-gray-700 text-white px-4 py-2 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-sm text-gray-400 mt-1">
              Enter a direct link to a single image (JPG, PNG, WebP, etc.)
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-200 text-gray-900 font-semibold py-2 rounded hover:bg-white transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
