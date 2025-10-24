// src/pages/AllProducts.jsx
import React, { useContext, useState } from "react";
import CardModal from "../component/CardModal";
import CartContext from "../context/CartContext";
import ThemeContext from "../context/ThemeProvider";

const productsData = [
  {
    id: 1,
    title: "Nike Air Zoom Pegasus 41",
    description:
      "Run farther and faster with the Nike Air Zoom Pegasus 41, featuring responsive cushioning and a breathable mesh upper for all-day comfort.",
    image:
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/ece3e2b4-9cd1-4163-bcb3-9aa425c6be01/AIR+ZOOM+PEGASUS+41.png",
    thumbnails: [
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/ada5ed5b-b695-46d2-8a2d-15200eb70ce2/AIR+ZOOM+PEGASUS+41.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/f4e5137f-c4f1-46e2-8a4b-1a0e93a88f0a/AIR+ZOOM+PEGASUS+41.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/934cb7af-4e46-45a4-aca7-8d51ac2b1801/AIR+ZOOM+PEGASUS+41.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/731ee6d1-71e0-4d5b-86d4-4105d2b1a474/AIR+ZOOM+PEGASUS+41.png",
    ],
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
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/b7d9211c-26e7-431a-ac24-b0540fb3c00f/AIR+FORCE+1+%2707.png",
    thumbnails: [
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/3cc96f43-47b6-43cb-951d-d8f73bb2f912/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/a0a300da-2e16-4483-ba64-9815cf0598ac/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/ef92df87-6098-4fa5-bc88-7107492febcf/AIR+FORCE+1+%2707.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/1c1e5f55-99c2-4522-b398-2352e01ba566/AIR+FORCE+1+%2707.png",
    ],
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
    thumbnails: [
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/f99375b0-c401-47fc-9413-daceab4a269f/AIR+MAX+270.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/f43d1b8c-ccc7-4436-a21a-d92683bc55f0/AIR+MAX+270.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/39a336cd-f81f-4925-bc4c-8413c1ed05ad/AIR+MAX+270.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/aaff6078-7edb-4f1d-8a4e-adbec5ce3903/AIR+MAX+270.png",
    ],
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
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/08013d8e-be49-4b55-825f-476fdc85dca3/NIKE+DUNK+LOW+RETRO.png",
    thumbnails: [
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/9a3cfd40-2d6c-41c5-8ae4-4d5a7a73508c/NIKE+DUNK+LOW+RETRO.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/10c4caae-e5b5-4e42-b2e6-71f7aa7a5f19/NIKE+DUNK+LOW+RETRO.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/e0b25866-74de-4c94-b65c-e78a6bbb9fab/NIKE+DUNK+LOW+RETRO.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/77de6a2e-075a-4db9-ace9-444ee5ad2003/NIKE+DUNK+LOW+RETRO.png",
    ],
    kind: "Sneakers",
    oldPrice: 149.99,
    currentPrice: 119.99,
    discount: 20,
    badge: "Limited Edition",
    rating: 5,
    reviews: 198,
  },
  {
    id: 5,
    title: "Nike React Infinity Run Flyknit",
    description:
      "Designed to reduce injury and provide smooth cushioning for long-distance runs.",
    image:
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/4b95b3e9-9583-41aa-b4d0-0425eaae3e8a/W+NIKE+REACT+PHANTOM+RUN+FK+2.png",
    thumbnails: [
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/c4a76408-e4ad-49da-bed4-c5e741d294ab/W+NIKE+REACT+PHANTOM+RUN+FK+2.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/759222d6-e768-4429-8839-c333f87ce6ef/W+NIKE+REACT+PHANTOM+RUN+FK+2.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/58d8a557-1b19-460d-a044-8c354673a933/W+NIKE+REACT+PHANTOM+RUN+FK+2.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/93328136-e377-47c6-a191-893bba207c35/W+NIKE+REACT+PHANTOM+RUN+FK+2.png",
    ],
    kind: "Running Shoes",
    oldPrice: 160.0,
    currentPrice: 135.0,
    discount: 16,
    badge: "Popular",
    rating: 4.7,
    reviews: 198,
  },
  {
    id: 6,
    title: "Nike Air Zoom Alphafly NEXT%",
    description:
      "High-performance racing shoe with ZoomX foam and carbon fiber plate for elite speed.",
    image:
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/0654e00d-6e45-4766-8714-d55a0ddbe3da/AIR+ZOOM+ALPHAFLY+NEXT%25+3.png",
    thumbnails: [
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/db8cd92d-b219-4e72-90f4-e43a5a779ca3/AIR+ZOOM+ALPHAFLY+NEXT%25+3.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/147ac3fa-2814-4891-9e76-30c9f0347e74/AIR+ZOOM+ALPHAFLY+NEXT%25+3.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/80986e1e-73a8-4a54-9159-8347ebca1b01/AIR+ZOOM+ALPHAFLY+NEXT%25+3.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/1e79994f-fef4-4a40-acea-cf929a7cc976/AIR+ZOOM+ALPHAFLY+NEXT%25+3.png",
    ],
    kind: "Racing Shoes",
    oldPrice: 250.0,
    currentPrice: 199.99,
    discount: 20,
    badge: "Limited Edition",
    rating: 4.8,
    reviews: 142,
  },
  {
    id: 7,
    title: "Nike Free RN 5.0",
    description:
      "Lightweight and flexible running shoe, designed for natural movement and comfort.",
    image:
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/3b27eb2b-da90-4a12-bb43-a093ca26b4a3/NIKE+FREE+RN+5.0+NEXT+NATURE.png",
    thumbnails: [
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/9c72fc47-b20c-41f4-afca-afd01d011df9/NIKE+FREE+RN+5.0+NEXT+NATURE.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/6de9c3a3-6010-4fb4-9f7f-e551dc72dfc5/NIKE+FREE+RN+5.0+NEXT+NATURE.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/ab3578dd-5a50-4d0b-9c64-a6946d0a78d3/NIKE+FREE+RN+5.0+NEXT+NATURE.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/740e0ba3-9da8-4554-8e43-e1d2396b4f56/NIKE+FREE+RN+5.0+NEXT+NATURE.png",
    ],
    kind: "Running Shoes",
    oldPrice: 130.0,
    currentPrice: 99.99,
    discount: 23,
    badge: "Popular",
    rating: 4.6,
    reviews: 256,
  },
   {
    id: 8,
    title: "Nike Air Jordan 1 Mid",
    description:
      "Classic Air Jordan 1 Mid with premium leather and iconic style, perfect for streetwear and casual wear.",
    image:
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/24750e81-85ed-4b0e-8cd8-becf0cd97b2f/WMNS+AIR+JORDAN+1+MID.png",
    thumbnails: [
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/858bae62-65db-4f83-a870-9da6f3d92624/WMNS+AIR+JORDAN+1+MID.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/994eb8da-59c2-491f-b1ac-6560fe7a0f3d/WMNS+AIR+JORDAN+1+MID.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/994eb8da-59c2-491f-b1ac-6560fe7a0f3d/WMNS+AIR+JORDAN+1+MID.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e0c623f4-3bdc-43c1-a59f-c5eacfce3fb0/WMNS+AIR+JORDAN+1+MID.png",
    ],
    kind: "Lifestyle Shoes",
    oldPrice: 150.0,
    currentPrice: 129.99,
    discount: 13,
    badge: "Best Seller",
    rating: 4.9,
    reviews: 320,
  },
  {
    id: 9,
    title: "Nike Blazer Mid '77 Vintage",
    description:
      "Retro basketball style with a vintage look, durable leather upper, and timeless midsole design.",
    image:
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/865b0c21-4c5c-4ef6-81c5-bb6f266e73a9/BLAZER+MID+%2777+VNTG.png",
    thumbnails: [
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/4f1d4459-ef3c-4d73-b0ec-b5f54cb41749/BLAZER+MID+%2777+VNTG.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/39a8bf3f-34a4-4736-9d5f-724566d6d889/BLAZER+MID+%2777+VNTG.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/3298bc86-8a66-43e4-8196-54a94e86c535/BLAZER+MID+%2777+VNTG.png",
      "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto/716d48c0-13a7-4cc1-a396-b21037ab59a2/BLAZER+MID+%2777+VNTG.png",
    ],
    kind: "Sneakers",
    oldPrice: 120.0,
    currentPrice: 99.99,
    discount: 17,
    badge: "New Arrival",
    rating: 4.7,
    reviews: 210,
  },
];

const AllProducts = () => {
  const [showFullDescription, setShowFullDescription] = useState({});
  const [wishlist, setWishlist] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
//   const { theme } = useContext(ThemeContext);

  const toggleDescription = (index) => {
    setShowFullDescription((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleWishlist = (index) => {
    setWishlist((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const openModal = (product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  return (
    <section className="px-4 md:px-10 ">
  
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-20 mb-20 lg:grid-cols-4 gap-6 px-6">
        {productsData.map((product, index) => (
          <div
            key={index}
            className=" rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-pink-400/50"
          >
            <div className="relative h-56 overflow-hidden rounded-t-2xl bg-gray-100">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-90 hover:-rotate-45"
              />
              <div className="absolute top-3 left-3 bg-pink-600 text-white px-2 py-1 rounded text-[0.6rem] font-bold uppercase tracking-wider">
                {product.badge}
              </div>

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
                    className="flex-1 bg-gradient-to-r from-purple-500 to-blue-400 py-2 rounded-xl text-xs font-semibold shadow-md hover:from-blue-200 hover:to-purple-800 hover:shadow-lg transition-all"
                  >
                    View More
                  </button>
                  <button
                    onClick={() => addToCart(product)}
                    className="flex-1 bg-pink-600 text-white py-2 rounded-xl text-xs font-semibold shadow-md hover:bg-pink-700 transition-all duration-1000"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <CardModal product={selectedProduct} onClose={closeModal} />
      )}
    </section>
  );
};

export default AllProducts;
