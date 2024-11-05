import React, { useState } from "react";
import Product2img from "../images/product2.jpeg";
import Product4img from "../images/product4.jpeg";
import Product5img from "../images/product5.jpeg";
import Product6img from "../images/product6.jpeg";

const Products = () => {
  const [selectedFilter, setSelectedFilter] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");

  const items = [
    {
      id: 1,
      type: "SHIRT",
      name: "Cool Shirt",
      image: Product2img,
      price: 199,
      availability: "available",
      sizes: ["S", "M", "L"],
      ratings: [4, 5],
      colors: ["Blue", "Red"],
      tags: ["Top Rated", "New Trend"],
      collections: ["Summer", "Beach"],
    },
    {
      id: 2,
      type: "SHORTS",
      name: "Summer Shorts",
      image: Product4img,
      price: 99,
      availability: "available",
      sizes: ["M", "L"],
      ratings: [3, 4],
      colors: ["Yellow"],
      tags: ["Best Seller"],
      collections: ["Summer"],
    },
    {
      id: 3,
      type: "SUITS",
      name: "Formal Suit",
      image: Product5img,
      price: 399,
      availability: "outOfStock",
      sizes: ["M", "L", "XL"],
      ratings: [5],
      colors: ["Black"],
      tags: ["Classic"],
      collections: ["Winter"],
    },
    {
      id: 4,
      type: "T-SHIRTS",
      name: "Graphic Tee",
      image: Product6img,
      price: 49,
      availability: "available",
      sizes: ["XS", "S"],
      ratings: [4],
      colors: ["White"],
      tags: ["New Trend"],
      collections: ["Festival"],
    },
    {
      id: 5,
      type: "JEANS",
      name: "Blue Jeans",
      image: Product2img,
      price: 149,
      availability: "available",
      sizes: ["M", "L", "XL"],
      ratings: [3, 4],
      colors: ["Blue"],
      tags: ["Top Rated"],
      collections: ["Trekking"],
    },
    {
      id: 6,
      type: "JACKETS",
      name: "Winter Jacket",
      image: Product4img,
      price: 249,
      availability: "available",
      sizes: ["L", "XL"],
      ratings: [5],
      colors: ["Black"],
      tags: ["Classic"],
      collections: ["Winter"],
    },
    {
      id: 7,
      type: "COATS",
      name: "Classic Coat",
      image: Product5img,
      price: 299,
      availability: "available",
      sizes: ["M", "L"],
      ratings: [4, 5],
      colors: ["Brown"],
      tags: ["Top Rated"],
      collections: ["Winter"],
    },
    {
      id: 8,
      type: "NEW",
      name: "New Arrival",
      image: Product6img,
      price: 199,
      availability: "available",
      sizes: ["S", "M"],
      ratings: [4],
      colors: ["Pink"],
      tags: ["New Trend"],
      collections: ["Festival"],
    },
  ];

  const filters = [
    "ALL",
    "NEW",
    "SHIRT",
    "SHORTS",
    "SUITS",
    "T-SHIRTS",
    "JEANS",
    "JACKETS",
    "COATS",
  ];

  const filteredItems = items.filter((item) => {
    const matchesFilter =
      selectedFilter === "ALL" || item.type === selectedFilter;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setSelectedFilter("ALL"); // Automatically set filter to "ALL" when typing in search
  };

  return (
    <section className="p-4 w-full overflow-hidden bg-gray-100">
      <p className="text-xs font-medium mb-4">Home / Products</p>
      <h1 className="text-xl font-bold mb-3">PRODUCTS</h1>

      <div className="flex flex-col lg:flex-row lg:space-x-5 space-y-5 lg:space-y-0 items-start">
        {/* Search Input */}
        <div className="relative md:w-1/3 w-full cursor-pointer">
          <svg
            onClick={() => document.getElementById("searchInput").focus()}
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
          >
            <circle
              cx="7.80834"
              cy="7.80834"
              r="6.80834"
              stroke="black"
              strokeWidth="1.5"
            />
            <path
              d="M12.825 12.8242L15.3333 15.3326"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>

          <input
            type="text"
            id="searchInput"
            className="w-full pl-10 pr-8 bg-[#D9D9D9] rounded-sm p-2 text-sm text-gray-700 focus:outline-none"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />

          {/* Clear (X) button */}
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
            >
              &times;
            </button>
          )}
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap lg:justify-start justify-between gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`border-2 text-gray-600 md:w-28 w-20 p-1 font-medium text-xs ${
                selectedFilter === filter
                  ? "text-black border-black"
                  : "text-[#D9D9D9]"
              } hover:text-black`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Display Filtered Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
        {filteredItems.length > 0 ? (
          filteredItems.map(({ id, name, image, price }) => (
            <div key={id} className="border rounded-md p-4 bg-white">
              <img
                src={image}
                alt={name}
                className="h-80 w-full object-cover"
              />
              <div className="flex items-center space-x-1 pt-2">
                <p className="font-medium text-xs text-gray-600">{name}</p>
                <div className="h-3 w-3 bg-black"></div>
                <p className="font-medium text-xs text-gray-600">
                  +{Math.max(...items.find((item) => item.id === id).ratings)}
                </p>
              </div>
              <div className="flex items-center justify-between pt-2">
                <h2 className="font-medium text-sm">
                  <a href="https://stupendous-cranachan-15451e.netlify.app/">
                    {name}
                  </a>
                </h2>
                <p className="text-gray-600">${price.toFixed(2)}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No items found for this filter.</p>
        )}
      </div>
    </section>
  );
};

export default Products;
