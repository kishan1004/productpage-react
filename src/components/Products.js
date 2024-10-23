import React from "react";
import Product2img from "../images/product2.jpeg";
import Product4img from "../images/product4.jpeg";
import Product5img from "../images/product5.jpeg";
import Product6img from "../images/product6.jpeg";

const Products = () => {
  return (
    <section className="md:w-3/4 p-4 w-full overflow-hidden  bg-gray-100">
      <p className="text-xs font-medium mb-4">Home / Products</p>
      <h1 className="text-xl font-bold mb-3">PRODUCTS</h1>

      <div className="lg:flex lg:space-x-5 space-y-5 lg:space-y-0">
        <div className="flex items-center justify-between rounded-sm bg-[#D9D9D9] p-3 md:w-1/3">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
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
            className="lg:ml-5 bg-[#D9D9D9] text-sm text-gray-700"
            placeholder="Search"
          />
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-2">
          {[
            "NEW",
            "SHIRT",
            "SHORTS",
            "SUITS",
            "T-SHIRTS",
            "JEANS",
            "JACKETS",
            "COATS",
          ].map((item, index) => (
            <button
              key={index}
              className="border-2 w-28 p-1 font font-medium text-xs text-[#D9D9D9] hover:text-black"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
        <div>
          <img
            src={Product6img}
            alt="Product"
            className="h-80 w-full object-cover"
          />

          <div className="flex items-center space-x-1 pt-2">
            <p className="font-medium text-xs text-gray-600">Cotton T Shirt</p>
            <div className="h-3 w-3 bg-black"></div>
            <p className="font-medium text-xs text-gray-600">+5</p>
          </div>

          <div className="flex items-center justify-between pt-2">
            <h2 className="font-medium text-sm">
              <a href="https://stupendous-cranachan-15451e.netlify.app/">
                Basic Slim Fit T-Shirt
              </a>
            </h2>
            <p className="text-gray-600">$199</p>
          </div>
        </div>
        <div>
          <img
            src={Product2img}
            alt="Product"
            className="h-80 w-full object-cover"
          />

          <div className="flex items-center space-x-1 pt-2">
            <p className="font-medium text-xs text-gray-600">
              Crewneck T Shirt
            </p>
            <div className="h-3 w-3 bg-black"></div>
            <p className="font-medium text-xs text-gray-600">+5</p>
          </div>

          <div className="flex items-center justify-between pt-2">
            <h2 className="font-medium text-sm">
              <a href="https://stupendous-cranachan-15451e.netlify.app/">
                Basic Slim Fit T-Shirt
              </a>
            </h2>
            <p className="text-gray-600">$199</p>
          </div>
        </div>
        <div>
          <img
            src={Product4img}
            alt="Product"
            className="h-80 w-full object-cover"
          />

          <div className="flex items-center space-x-1 pt-2">
            <p className="font-medium text-xs text-gray-600">Cotton T Shirt</p>
            <div className="h-3 w-3 bg-black"></div>
            <p className="font-medium text-xs text-gray-600">+5</p>
          </div>

          <div className="flex items-center justify-between pt-2">
            <h2 className="font-medium text-sm">
              <a href="https://stupendous-cranachan-15451e.netlify.app/">
                Basic Slim Fit T-Shirt
              </a>
            </h2>
            <p className="text-gray-600">$199</p>
          </div>
        </div>
        <div>
          <img
            src={Product4img}
            alt="Product"
            className="h-80 w-full object-cover"
          />

          <div className="flex items-center space-x-1 pt-2">
            <p className="font-medium text-xs text-gray-600">Cotton T Shirt</p>
            <div className="h-3 w-3 bg-black"></div>
            <p className="font-medium text-xs text-gray-600">+5</p>
          </div>

          <div className="flex items-center justify-between pt-2">
            <h2 className="font-medium text-sm">
              <a href="https://stupendous-cranachan-15451e.netlify.app/">
                Basic Slim Fit T-Shirt
              </a>
            </h2>
            <p className="text-gray-600">$199</p>
          </div>
        </div>
        <div>
          <img
            src={Product5img}
            alt="Product"
            className="h-80 w-full object-cover"
          />

          <div className="flex items-center space-x-1 pt-2">
            <p className="font-medium text-xs text-gray-600">Cotton T Shirt</p>
            <div className="h-3 w-3 bg-black"></div>
            <p className="font-medium text-xs text-gray-600">+5</p>
          </div>

          <div className="flex items-center justify-between pt-2">
            <h2 className="font-medium text-sm">
              <a href="https://stupendous-cranachan-15451e.netlify.app/">
                Basic Slim Fit T-Shirt
              </a>
            </h2>
            <p className="text-gray-600">$199</p>
          </div>
        </div>
        <div>
          <img
            src={Product6img}
            alt="Product"
            className="h-80 w-full object-cover"
          />

          <div className="flex items-center space-x-1 pt-2">
            <p className="font-medium text-xs text-gray-600">Cotton T Shirt</p>
            <div className="h-3 w-3 bg-black"></div>
            <p className="font-medium text-xs text-gray-600">+5</p>
          </div>

          <div className="flex items-center justify-between pt-2">
            <h2 className="font-medium text-sm">
              <a href="https://stupendous-cranachan-15451e.netlify.app/">
                Basic Slim Fit T-Shirt
              </a>
            </h2>
            <p className="text-gray-600">$199</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
