import { useContext } from "react";
import CartContext from "../context/CartContext";
import ThemeContext from "../context/ThemeProvider";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa";

const AddToCartModal = ({ isOpen, onClose }) => {
  const { cartItems, addToCart, removeFromCart, clearCart } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.currentPrice * item.quantity,
    0
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50 backdrop-blur-sm p-4">
      <div
        className={`relative rounded-2xl shadow-2xl p-8 w-[90%] max-w-6xl max-h-[90vh] overflow-y-auto border ${
          theme === "dark"
            ? "border-gray-700 bg-gradient-to-tr from-gray-900 via-gray-950 to-black text-white"
            : "border-gray-200 bg-white text-gray-800 shadow-sm"
        }`}
      >
        <div className="flex justify-between items-center mb-8 border-b pb-4 border-gray-500/30">
          <h2 className="text-3xl font-extrabold tracking-tight">Your Cart</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-red-500 transition-all text-xl"
          >
            ✕
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg">Your cart is empty.</p>
            <p className="mt-2 text-sm">Browse our products and add something amazing!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center p-4 rounded-xl border border-gray-600/30 hover:border-gray-500/60 hover:bg-gray-700/20 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image} // Updated to match productsData
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded-xl border border-gray-600/30"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-sm text-gray-400">
                        Price: {`$${item.currentPrice.toFixed(2)}`}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => removeFromCart(item.id, "decrease")}
                          className="p-2 rounded-full border hover:bg-gray-600/30 transition"
                        >
                          <FaMinus size={12} />
                        </button>
                        <span className="font-semibold text-lg">{item.quantity}</span>
                        <button
                          onClick={() => addToCart(item)}
                          className="p-2 rounded-full border hover:bg-gray-600/30 transition"
                        >
                          <FaPlus size={12} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <span className="text-xl font-semibold">
                      ${(item.currentPrice * item.quantity).toFixed(2)}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-600 transition"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}

              <div className="flex justify-end mt-6">
                <button
                  onClick={clearCart}
                  className="px-5 py-2 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl font-medium transition-all shadow-md hover:shadow-lg"
                >
                  Clear All
                </button>
              </div>
            </div>

            <div
              className={`rounded-2xl p-6 h-fit border shadow-xl ${
                theme === "dark"
                  ? "bg-gray-800/60 border-gray-700"
                  : "bg-white border-gray-200"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">Order Summary</h3>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2 text-gray-400">
                <span>Tax (5%)</span>
                <span>${(totalPrice * 0.05).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold border-t border-gray-500/20 pt-2 mt-2">
                <span>Total</span>
                <span>${(totalPrice * 1.05).toFixed(2)}</span>
              </div>

              <div className="mt-6 text-sm text-gray-400 space-y-1">
                <p>📦 Free shipping for orders over $100</p>
                <p>⏰ Estimated delivery: 3-5 business days</p>
                <p>💳 Secure payment guaranteed</p>
              </div>

              <div className="mt-6 space-y-3">
                <a
                  href="#"
                  className="w-full block text-center py-3 rounded-xl bg-gray-300 hover:bg-gray-400 text-black font-medium transition"
                >
                  Proceed to Payment →
                </a>
                <button
                  onClick={onClose}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 font-semibold hover:opacity-90 transition-all shadow-md hover:shadow-xl"
                >
                  ← Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddToCartModal;
