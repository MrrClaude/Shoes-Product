import React, { useState } from "react";
import CardModal from "../component/CardModal";

const productsData = [
  {
    id: 1,
    title: "Nike Air Zoom Pegasus 41",
    description:
      "Run farther and faster with the Nike Air Zoom Pegasus 41, featuring responsive cushioning and a breathable mesh upper for all-day comfort.",
    image:
      "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    kind: "Running Shoes",
    oldPrice: 159.99,
    currentPrice: 129.99,
    discount: 18,
    badge: "Best Seller",
    rating: 5,
    reviews: 284,
  },
  {
    id: 2,
    title: "Nike Air Force 1 '07",
    description:
      "A timeless icon — the Nike Air Force 1 ‘07 combines classic court style with fresh details and premium leather for a modern everyday look.",
    image:
      "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    kind: "Lifestyle Shoes",
    oldPrice: 129.99,
    currentPrice: 99.99,
    discount: 23,
    badge: "Hot",
    rating: 4.9,
    reviews: 456,
  },
  {
    id: 3,
    title: "Nike Air Max 270",
    description:
      "Featuring the largest Air unit yet, the Nike Air Max 270 offers supreme comfort and bold style for everyday wear.",
    image:
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/b7add649-aefe-436c-9185-93b1a329781d/AIR+MAX+270.png",
    kind: "Casual Shoes",
    oldPrice: 179.99,
    currentPrice: 149.99,
    discount: 17,
    badge: "New Arrival",
    rating: 4.8,
    reviews: 332,
  },
  {
    id: 4,
    title: "Nike Dunk Low Retro",
    description:
      "Classic basketball style returns in the Nike Dunk Low Retro, with premium leather overlays and timeless two-tone color blocking.",
    image:
      "https://static.ftshp.digital/img/p/1/4/4/8/2/5/4/1448254-full_product.jpg",
    kind: "Sneakers",
    oldPrice: 149.99,
    currentPrice: 119.99,
    discount: 20,
    badge: "Limited Edition",
    rating: 5,
    reviews: 198,
  },
];

const Shose = () => {
  const [showFullDescription, setShowFullDescription] = useState({});
  const [wishlist, setWishlist] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);

  const toggleWishlist = (index) => {
    setWishlist((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleDescription = (index) => {
    setShowFullDescription((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const openModal = (product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  return (
    <section className="px-4 md:px-10">
      <h1
        id="Shoes"
        className="text-4xl md:text-5xl font-bold text-center mb-10 mt-20"
      >
        Product
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
        {productsData.map((product, index) => (
          <div
            key={index}
            className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-pink-400/50"
          >
            {/* Image Section */}
            <div className="relative h-56 overflow-hidden rounded-t-2xl bg-gray-100">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
              />

              {/* Badge */}
              <div className="absolute top-3 left-3 bg-pink-600 text-white px-2 py-1 rounded text-[0.6rem] font-bold uppercase tracking-wider">
                {product.badge}
              </div>

              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(index)}
                className={`absolute top-4 right-4 bg-white/90 rounded-full w-10 h-10 flex items-center justify-center shadow-sm transition-colors duration-200 hover:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 ${
                  wishlist[index]
                    ? "text-pink-600"
                    : "text-gray-500 hover:text-pink-600"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill={wishlist[index] ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </button>
            </div>

            {/* Details */}
            <div className="p-4">
              <div className="text-indigo-400 text-xs font-semibold uppercase tracking-wide mb-1">
                {product.kind}
              </div>

              <h2 className="text-lg font-bold mb-2 line-clamp-1">
                {product.title}
              </h2>

              <p
                className={`text-sm mb-3 ${
                  showFullDescription[index] ? "" : "line-clamp-2"
                }`}
              >
                {product.description}
              </p>
              <button
                onClick={() => toggleDescription(index)}
                className="text-pink-500 font-semibold text-xs hover:underline mb-2"
              >
                {showFullDescription[index] ? "See Less" : "See More"}
              </button>

              {/* Price and Buttons */}
              <div className="mt-4 flex flex-col gap-3">
                <div>
                  <div className="text-gray-400 line-through text-xs mb-1">
                    ${Number(product.oldPrice).toFixed(2)}
                  </div>
                  <div className="flex items-center">
                    <div className="text-xl font-bold">
                      ${Number(product.currentPrice).toFixed(2)}
                    </div>
                    <div className="ml-2 px-2 py-0.5 bg-pink-100 text-pink-700 rounded-md font-semibold text-xs">
                      -{product.discount}%
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => openModal(product)}
                    className="flex-1 bg-pink-600 text-white py-2 rounded-xl text-xs font-semibold shadow-md hover:bg-pink-700 transition-all"
                  >
                    View More
                  </button>
                  <button className="flex-1 bg-pink-600 text-white py-2 rounded-xl text-xs font-semibold shadow-md hover:bg-pink-700 transition-all">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <CardModal product={selectedProduct} onClose={closeModal} />
      )}
    </section>
  );
};

export default Shose;
