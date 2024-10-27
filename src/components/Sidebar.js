import React, { useState } from "react";

const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);

  const [availabilityFilters, setAvailabilityFilters] = useState({
    available: false,
    outOfStock: false,
  });

  const handleAvailabilityChange = (e) => {
    const { name, checked } = e.target;
    setAvailabilityFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ["XS", "S", "M", "L", "XL", "2X"];

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [isOpen, setIsOpen] = useState(false);

  const handleMinPriceChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 1);
    setMinPrice(value);
  };

  const handleMaxPriceChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 1);
    setMaxPrice(value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [selectedRatings, setSelectedRatings] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleRatingSelect = (rating) => {
    setSelectedRatings((prevSelectedRatings) =>
      prevSelectedRatings.includes(rating)
        ? prevSelectedRatings.filter((r) => r !== rating)
        : [...prevSelectedRatings, rating]
    );
  };

  const toggleDropdown2 = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClearAll = () => {
    setAvailabilityFilters({ available: false, outOfStock: false });
    setSelectedSize(null);
    setMinPrice(0);
    setMaxPrice(5000);
    setSelectedRatings([]);
  };

  const handleApply = () => {
    console.log("Filters applied:", {
      availability: availabilityFilters,
      selectedSize,
      minPrice,
      maxPrice,
      selectedRatings,
    });
  };

  return (
    <>
      <div className="md:hidden flex justify-between items-center p-4  bg-gray-100">
        <h3 className="text-xl font-bold">Filters</h3>
        <button onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
          <svg
            width="28"
            height="18"
            viewBox="0 0 28 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27 1L1 1"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M19 9L1 9"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M14 17H1"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <aside
        className={`${
          isSidebarVisible ? "block" : "hidden"
        } md:block md:w-1/4 pt-4 px-5  bg-gray-100 z-50 absolute top-0 left-0 h-full md:h-auto md:relative`}
      >
        <h3 className="text-xl font-bold mb-4">Filters</h3>

        <div className="mb-4">
          <h4 className="font-semibold mb-2">Size</h4>
          <div className="flex space-x-2">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => handleSizeSelect(size)}
                className={`border w-10 h-10 font-medium text-sm ${
                  selectedSize === size
                    ? "border-gray-900 text-gray-900 bg-gray-300"
                    : "border-gray-500 text-gray-600 hover:bg-gray-300"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
          {selectedSize && (
            <p className="mt-2 text-sm text-gray-700">
              Selected size: {selectedSize}
            </p>
          )}
        </div>

        <div className="border-t border-dotted border-gray-500 w-full my-4"></div>

        <div className="my-4">
          <div className="my-4 flex items-center justify-between">
            <h4 className="font-bold text-sm">Availability</h4>
            <button onClick={() => setIsAvailabilityOpen(!isAvailabilityOpen)}>
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transform transition-transform ${
                  isAvailabilityOpen ? "rotate-90" : "rotate-0"
                }`}
              >
                <path
                  d="M1 10L6 5.5L1 1"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {isAvailabilityOpen && (
            <div className="flex flex-col space-y-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="available"
                  checked={availabilityFilters.available}
                  onChange={handleAvailabilityChange}
                  className="mr-2 w-5 h-5"
                />
                Available
                <span className="text-blue-700 ml-5">(450)</span>
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="outOfStock"
                  checked={availabilityFilters.outOfStock}
                  onChange={handleAvailabilityChange}
                  className="mr-2 w-5 h-5"
                />
                Out of Stock
                <span className="text-blue-700 ml-5"> (18)</span>
              </label>
            </div>
          )}
        </div>

        <div className="border-t border-dotted border-gray-500 w-full my-4"></div>

        <div className="my-4 flex items-center justify-between">
          <h4 className="font-bold text-sm">Category</h4>
          <button>
            <svg
              width="7"
              height="11"
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 10L6 5.5L1 1"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="border-t border-dotted border-gray-500 w-full my-4"></div>

        <div className="my-4 flex items-center justify-between">
          <h4 className="font-bold text-sm">Colors</h4>
          <button>
            <svg
              width="7"
              height="11"
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 10L6 5.5L1 1"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="border-t border-dotted border-gray-500 w-full my-4"></div>

        <div className="my-4">
          <div className="flex items-center justify-between">
            <h4 className="font-bold text-sm">Price Range</h4>
            <button onClick={toggleDropdown}>
              <svg
                width="7"
                height="11"
                viewBox="0 0 7 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transform transition-transform ${
                  isOpen ? "rotate-90" : ""
                }`}
              >
                <path
                  d="M1 10L6 5.5L1 1"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {isOpen && (
            <div className="mt-4">
              <div className="flex space-x-2 mb-4">
                <input
                  type="number"
                  value={minPrice}
                  onChange={handleMinPriceChange}
                  className="w-20 p-2 border border-gray-300 rounded text-center text-sm"
                  min="0"
                  max="5000"
                />
                <span className="text-gray-500">-</span>
                <input
                  type="number"
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                  className="w-20 p-2 border border-gray-300 rounded text-center text-sm"
                  min="0"
                  max="5000"
                />
              </div>
              <div className="flex items-center space-x-4">
                <input
                  type="range"
                  min="0"
                  max="5000"
                  value={minPrice}
                  onChange={handleMinPriceChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <input
                  type="range"
                  min="0"
                  max="5000"
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              <p className="mt-2 text-sm text-gray-700">
                Selected range: ${minPrice} - ${maxPrice}
              </p>
            </div>
          )}
        </div>
        <div className="border-t border-dotted border-gray-500 w-full my-4"></div>

        <div className="my-4 flex items-center justify-between">
          <h4 className="font-bold text-sm">Collections</h4>
          <button>
            <svg
              width="7"
              height="11"
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 10L6 5.5L1 1"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="border-t border-dotted border-gray-500 w-full my-4"></div>

        <div className="my-4 flex items-center justify-between">
          <h4 className="font-bold text-sm">Tags</h4>
          <button>
            <svg
              width="7"
              height="11"
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 10L6 5.5L1 1"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="border-t border-dotted border-gray-500 w-full my-4"></div>

        <div className="mb-6">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={toggleDropdown2}
          >
            <h4 className="font-bold text-sm">Rating</h4>
            <svg
              width="7"
              height="11"
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transform transition-transform ${
                isDropdownOpen ? "rotate-90" : "rotate-0"
              }`}
            >
              <path
                d="M1 10L6 5.5L1 1"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {isDropdownOpen && (
            <div className="flex flex-col space-y-2 mt-4">
              {[5, 4, 3, 2, 1].map((rating) => (
                <label
                  key={rating}
                  className="flex items-center cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedRatings.includes(rating)}
                    onChange={() => handleRatingSelect(rating)}
                    className="form-checkbox h-4 w-4 text-yellow-400 border-gray-300 rounded"
                  />
                  <div
                    className={`flex items-center ml-2 ${
                      selectedRatings.includes(rating)
                        ? "text-yellow-400"
                        : "text-gray-400"
                    }`}
                  >
                    {[...Array(rating)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        className="mr-1"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                    <span className="text-sm">{rating} stars</span>
                  </div>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-dotted border-gray-500 w-full my-4"></div>

        <div className="flex space-x-4 mt-6">
          <button
            onClick={handleClearAll}
            className="w-full py-2 bg-black hover:text-[#D9D9D9] text-white font-semibold rounded"
          >
            Clear All
          </button>
          <button
            onClick={handleApply}
            className="w-full py-2 bg-[#D9D9D9] text-black hover:text-white font-semibold rounded"
          >
            Apply
          </button>
        </div>
      </aside>

      {isSidebarVisible && (
        <div
          onClick={() => setIsSidebarVisible(false)}
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
        />
      )}
    </>
  );
};

export default Sidebar;
