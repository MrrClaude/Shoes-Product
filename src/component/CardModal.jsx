import { useState, useContext, useEffect } from "react";
import CartContext from "../context/CartContext";
import ThemeContext from "../context/ThemeProvider";
import { IoClose } from "react-icons/io5";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const CardModal = ({ product, onClose }) => {
  if (!product) return null;

  const { addToCart } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);
  const [mainImage, setMainImage] = useState(product.image || product.img);

  const [quantity, setQuantity] = useState(1);
  const [like, setLike] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || 6);
  const [showNotification, setShowNotification] = useState(false);

  const handleClick = () => setLike(!like);

 useEffect(() => {
  if (product) {
    setMainImage(product.image || product.img);
    setQuantity(1);
    setSelectedSize(product.sizes?.[0] || 6);
  }
}, [product]);


  const handleAddToCart = () => {
    addToCart({ ...product, size: selectedSize }, quantity);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000); 
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-2 sm:p-4">
      <div
        className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-2xl p-4 md:p-6 shadow-xl ${
          theme === "dark"
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white"
            : "bg-white text-gray-900"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 text-2xl hover:text-red-500 transition ${
            theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          <IoClose />
        </button>

        {/* Layout */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto md:flex-[0.5] flex-shrink-0">
            <img
              src={product.thumbnails[0]}
              alt="Thumb 1"
              className="w-20 h-20 md:h-24 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-indigo-500 transition flex-shrink-0"
              onClick={() => setMainImage(product.thumbnails[0])}
            />
            <img
              src={product.thumbnails[1]}
              alt="Thumb 2"
              className="w-20 h-20 md:h-24 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-indigo-500 transition flex-shrink-0"
              onClick={() => setMainImage(product.thumbnails[1])}
            />
            <img
              src={product.thumbnails[2]}
              alt="Thumb 3"
              className="w-20 h-20 md:h-24 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-indigo-500 transition flex-shrink-0"
              onClick={() => setMainImage(product.thumbnails[2])}
            />
            <img
              src={product.thumbnails[3]}
              alt="Thumb 4"
              className="w-20 h-20 md:h-24 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-indigo-500 transition flex-shrink-0"
              onClick={() => setMainImage(product.thumbnails[3])}
            />
          </div>

          {/* Main Image */}
          <div className="flex-[1.5] flex justify-center min-w-0">
            <img
              src={mainImage}
              alt={product.title}
              className="w-full max-w-md h-[300px] sm:h-[350px] md:h-[350px] object-cover rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Product Details */}
          <div className="flex-[2] flex flex-col justify-between min-w-0 w-full">
            <div className="space-y-3">
              <h2
                className={`text-xl sm:text-2xl md:text-3xl font-bold ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {product.title}
              </h2>
              <p
                className={`text-sm sm:text-base ${
                  theme === "dark" ? "text-gray-300" : "text-gray-500"
                }`}
              >
                {product.kind}
              </p>

              {/* Price */}
              <div className="flex items-center gap-2 text-lg sm:text-xl md:text-2xl font-semibold">
                <span className="text-indigo-600">
                  ${(product.currentPrice * quantity).toFixed(2)}
                </span>
                <span className="line-through text-gray-400 text-sm sm:text-base">
                  ${(product.oldPrice * quantity).toFixed(2)}
                </span>
                <span className="ml-2 px-2 py-0.5 bg-pink-100 text-pink-700 rounded-md font-semibold text-xs sm:text-sm">
                  -{product.discount}%
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
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
                  className={`text-xs sm:text-sm ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {product.reviews} reviews
                </span>
              </div>

              {/* Description */}
              <p
                className={`text-sm sm:text-base md:text-base ${
                  theme === "dark" ? "text-gray-200" : "text-gray-700"
                }`}
              >
                {product.description}
              </p>

              {/* Sizes */}
              <div className="mb-4">
                <p className="font-semibold mb-2">Size:</p>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedSize(6)}
                    className={`px-3 py-1 rounded border font-semibold transition ${
                      selectedSize === 6
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : theme === "dark"
                        ? "bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700"
                        : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200"
                    }`}
                  >
                    6
                  </button>
                  <button
                    onClick={() => setSelectedSize(7)}
                    className={`px-3 py-1 rounded border font-semibold transition ${
                      selectedSize === 7
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : theme === "dark"
                        ? "bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700"
                        : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200"
                    }`}
                  >
                    7
                  </button>
                  <button
                    onClick={() => setSelectedSize(8)}
                    className={`px-3 py-1 rounded border font-semibold transition ${
                      selectedSize === 8
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : theme === "dark"
                        ? "bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700"
                        : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200"
                    }`}
                  >
                    8
                  </button>
                  <button
                    onClick={() => setSelectedSize(9)}
                    className={`px-3 py-1 rounded border font-semibold transition ${
                      selectedSize === 9
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : theme === "dark"
                        ? "bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700"
                        : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200"
                    }`}
                  >
                    9
                  </button>
                  <button
                    onClick={() => setSelectedSize(10)}
                    className={`px-3 py-1 rounded border font-semibold transition ${
                      selectedSize === 10
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : theme === "dark"
                        ? "bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700"
                        : "bg-gray-100 text-gray-800 border-gray-300 hover:bg-gray-200"
                    }`}
                  >
                    10
                  </button>
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-4">
                <label className="text-base font-semibold">Quantity:</label>
                <div
                  className={`flex items-center border-2 rounded-full overflow-hidden ${
                    theme === "dark"
                      ? "border-gray-700 bg-gray-800/60 hover:bg-gray-700/80"
                      : "border-gray-200 bg-white/80 hover:bg-gray-50/90"
                  }`}
                >
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className={`px-4 py-2 font-bold ${
                      theme === "dark"
                        ? "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600"
                        : "text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-600"
                    }`}
                  >
                    −
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className={`w-16 text-center font-semibold border-0 focus:outline-none bg-transparent ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  />
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className={`px-4 py-2 font-bold ${
                      theme === "dark"
                        ? "text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600"
                        : "text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-green-500"
                    }`}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 md:flex-row mt-2">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center gap-2 bg-pink-600 text-white py-3 px-4 rounded-xl shadow-md hover:bg-pink-700 transition-transform hover:scale-105 text-sm sm:text-base font-semibold"
              >
                <FaShoppingCart className="w-5 h-5" /> Add to Cart
              </button>

              <button
                onClick={handleClick}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl shadow-lg hover:scale-105 transition ${
                  theme === "dark"
                    ? "bg-gray-800 text-gray-200 hover:bg-gray-700 hover:shadow-gray-600/50"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300 hover:shadow-gray-400/50"
                } text-sm sm:text-base font-semibold`}
              >
                <FaHeart
                  className={`w-5 h-5 transition-colors duration-300 ${
                    like ? "text-pink-600" : "text-gray-400"
                  }`}
                />
                {like ? "Added to Wishlist" : "Wishlist"}
              </button>
            </div>
          </div>
        </div>
      </div>
         {showNotification && (
          <div className="absolute top-0 right-0 transform  bg-green-500 text-white px-4 py-2 rounded shadow-md">
            Added to cart successfully!
          </div>
        )}
    </div>
  );
};

export default CardModal;
