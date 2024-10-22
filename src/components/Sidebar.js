import React, { useState } from "react";

const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);

  return (
    <>
      <div className="md:hidden flex justify-between items-center p-4">
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
        } md:block md:w-1/4 pt-4 px-5  bg-white z-50 absolute top-0 left-0 h-full md:h-auto md:relative`}
      >
        <h3 className="text-xl font-bold mb-4">Filters</h3>

        <div className="mb-4">
          <h4 className="font-semibold mb-2">Size</h4>
          <div className="flex space-x-2">
            {["XS", "S", "M", "L", "XL", "2X"].map((size) => (
              <button
                key={size}
                className="border w-10 h-10 text-gray-600 hover:bg-gray-200 font-medium text-sm"
              >
                {size}
              </button>
            ))}
          </div>
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
                <input type="checkbox" className="mr-2 w-5 h-5" /> Availability
                <span className="text-blue-700 ml-5">(450)</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 w-5 h-5" /> Out of Stock
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

        <div className="my-4 flex items-center justify-between">
          <h4 className="font-bold text-sm">Price Range</h4>
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

        <div className="my-4 flex items-center justify-between">
          <h4 className="font-bold text-sm">Ratings</h4>
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
