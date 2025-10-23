import React, { useState, useContext, useEffect } from "react";
import CartContext from "../context/CartContext";
import ThemeContext from "../context/ThemeProvider";
import { IoClose } from "react-icons/io5";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const CardModal = ({ product, onClose }) => {
  if (!product) return null;

  const { addToCart } = useContext(CartContext);
  const [mainImage, setMainImage] = useState(product.image);
  const [quantity, setQuantity] = useState(1);
  const thumbnails = product.smallImg || [product.image];
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    setMainImage(product.image);
    setQuantity(1); // reset quantity when modal changes product
  }, [product]);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    onClose(); // optional: close modal after adding to cart
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-lg p-2 sm:p-4">
  <div
    className={`rounded-2xl shadow-xl w-full max-w-4xl overflow-y-auto relative p-4 sm:p-6 ${
      theme === "dark"
        ? "bg-linear-to-br from-gray-900 via-gray-800 to-black text-white"
        : "bg-gray-200 text-gray-900"
    }`}
  >
    {/* Close Button */}
    <button
      onClick={onClose}
      className={`absolute top-3 right-3 text-2xl hover:text-red-500 transition ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      <IoClose />
    </button>

    <div className="flex flex-col md:flex-row gap-4">
      {/* Left: Images */}
      <div className="md:w-1/2 flex flex-col items-center">
        <img
          src={mainImage}
          alt={product.title}
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-lg shadow-md mb-3 transition-transform duration-300 hover:scale-105"
        />
        <div className="flex gap-2 overflow-x-auto">
          {thumbnails.map((thumb, idx) => (
            <img
              key={idx}
              src={thumb}
              alt={`Thumbnail ${idx + 1}`}
              className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-md cursor-pointer opacity-70 hover:opacity-100 transition"
              onClick={() => setMainImage(thumb)}
            />
          ))}
        </div>
      </div>

      {/* Right: Product Details */}
      <div className="md:w-1/2 flex flex-col justify-between">
        <div>
          <h2
            className={`text-xl sm:text-2xl font-bold mb-1 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {product.title}
          </h2>
          <p
            className={`text-sm mb-3 ${
              theme === "dark" ? "text-gray-300" : "text-gray-500"
            }`}
          >
            {product.kind}
          </p>

          {/* Price */}
          <div className="mb-3 flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-bold text-indigo-600">
              ${(product.currentPrice * quantity).toFixed(2)}
            </span>
            <span className="line-through text-sm text-gray-400">
              ${(product.oldPrice * quantity).toFixed(2)}
            </span>
            <span className="ml-2 px-2 py-0.5 bg-pink-100 text-pink-700 rounded-md font-semibold text-xs">
              -{product.discount}%
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center mb-3">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill={i < Math.round(product.rating) ? "currentColor" : "none"}
                stroke="currentColor"
                className="w-4 sm:w-5 h-4 sm:h-5 text-yellow-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.46 13.97 5.82 21z"
                />
              </svg>
            ))}
            <span
              className={`ml-2 text-xs sm:text-sm ${
                theme === "dark" ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {product.reviews} reviews
            </span>
          </div>

          {/* Description */}
          <p
            className={`mb-4 text-sm sm:text-base ${
              theme === "dark" ? "text-gray-200" : "text-gray-700"
            }`}
          >
            {product.description}
          </p>

          {/* Quantity */}
          <div className="mb-6 flex items-center gap-2">
            <label
              className={`text-sm font-medium ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Quantity:
            </label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) =>
                setQuantity(Math.max(1, Number(e.target.value)))
              }
              className="w-16 text-center rounded-md border-gray-300 shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="flex-1 flex items-center justify-center gap-2 bg-pink-600 text-white py-3 sm:py-3 px-4 rounded-xl shadow-md hover:bg-pink-700 transition-all hover:scale-105  duration-300 text-sm sm:text-base font-semibold"
          >
            <FaShoppingCart className="w-5 h-5" /> Add to Cart
          </button>

          {/* Wishlist Button */}
          <button
            className={`flex-1 flex items-center justify-center gap-2 py-3 sm:py-3 px-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 ${
              theme === "dark"
                ? "bg-gray-800 text-gray-200 hover:bg-gray-700 hover:shadow-gray-600/50"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300 hover:shadow-gray-400/50"
            } text-sm sm:text-base font-semibold`}
          >
            <FaHeart className="w-5 h-5" /> Wishlist
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default CardModal;
