interface FilterProps {
  selectedCategory: string | null;
  setSelectedCategory: (cat: string | null) => void;
  maxPrice: number;
  setMaxPrice: (price: number) => void;
}

import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { HiChevronRight, HiChevronUp, HiCheck } from "react-icons/hi";
import { useState } from "react";
import { useCategories } from "../Hooks/useProducts";
import TestimonialsSkeleton from "./Skeleton/TestimonialsSkeleton";

const OnSaleCategoryFilter = ({
  selectedCategory,
  setSelectedCategory,
  setMaxPrice,
}: FilterProps) => {
  const SLIDER_MAX = 1000;
  const BACKEND_MAX_PRICE = 99999;
  const { data: categories, isLoading, error } = useCategories();
  const [sliderPrice, setSliderPrice] = useState<number>(SLIDER_MAX);

  const handlePriceChange = (value: number) => {
    setSliderPrice(value);

    if (value === SLIDER_MAX) {
      setMaxPrice(BACKEND_MAX_PRICE);
    } else {
      setMaxPrice(value);
    }
  };

  if (isLoading && !categories) {
    return <TestimonialsSkeleton />;
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        An error occurred while loading categories.
      </div>
    );
  }

  if (!isLoading && (!categories || categories.length === 0)) {
    return (
      <div className="text-center py-20 italic text-gray-400">
        No category found to display.
      </div>
    );
  }

  const colors = [
    "bg-green-500",
    "bg-red-500",
    "bg-yellow-400",
    "bg-orange-500",
    "bg-sky-400",
    "bg-blue-700",
    "bg-purple-600",
    "bg-pink-500",
    "bg-white border-gray-200",
    "bg-black",
  ];
  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];
  const styles = ["Casual", "Formal", "Party", "Gym"];

  return (
    <div className="w-full md:max-w-73.75 border border-gray-200 rounded-[20px] p-5 md:p-6 bg-white font-kalvin">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Filters</h2>
        <HiAdjustmentsHorizontal className="w-5 h-5 text-gray-400 cursor-pointer" />
      </div>

      <hr className="border-gray-100 mb-5" />

      <div className="space-y-4 mb-6">
        {categories?.map((cat) => (
          <div
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`flex justify-between items-center text-gray-500 cursor-pointer hover:text-black transition-colors ${
              selectedCategory === cat
                ? "text-black font-bold"
                : "text-gray-500 hover:text-black"
            }`}
          >
            <span>{cat}</span>
            <HiChevronRight className="w-4 h-4" />
          </div>
        ))}
        {selectedCategory && (
          <button
            onClick={() => setSelectedCategory(null)}
            className="text-xs text-red-500 underline cursor-pointer"
          >
            Clean the Filter
          </button>
        )}
      </div>

      <hr className="border-gray-100 mb-5" />

      <div className="mb-0 md:mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Price</h3>
          <HiChevronUp className="w-5 h-5" />
        </div>
        <input
          type="range"
          min={"0"}
          max={SLIDER_MAX}
          value={sliderPrice}
          onChange={(e) => handlePriceChange(Number(e.target.value))}
          className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-black"
        />
        <span>{sliderPrice === SLIDER_MAX ? "$1000" : `$${sliderPrice}`}</span>
      </div>

      <hr className="hidden md:block border-gray-100 mb-5" />

      <div className="hidden md:block mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Colors</h3>
          <HiChevronUp className="w-5 h-5" />
        </div>
        <div className="flex flex-wrap gap-3">
          {colors.map((color, index) => (
            <button
              key={index}
              className={`w-9 h-9 rounded-full border ${color} flex items-center justify-center transition-transform hover:scale-110`}
            >
              {index === 5 && <HiCheck className="text-white w-4 h-4" />}
            </button>
          ))}
        </div>
      </div>

      <hr className="hidden md:block border-gray-100 mb-5" />

      <div className="hidden md:block mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Size</h3>
          <HiChevronUp className="w-5 h-5" />
        </div>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              className={`px-5 py-2.5 rounded-full text-sm transition-colors ${
                size === "Large"
                  ? "bg-black text-white"
                  : "bg-[#F0F0F0] text-gray-600 hover:bg-gray-200"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <hr className="hidden md:block border-gray-100 mb-5" />

      <div className="hidden md:block mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Dress Style</h3>
          <HiChevronUp className="w-5 h-5" />
        </div>
        <div className="space-y-4">
          {styles.map((style) => (
            <div
              key={style}
              className="flex justify-between items-center text-gray-500 cursor-pointer hover:text-black"
            >
              <span>{style}</span>
              <HiChevronRight className="w-4 h-4" />
            </div>
          ))}
        </div>
      </div>

      <button className="hidden md:block w-full bg-black text-white py-4 rounded-full font-medium transition-all hover:bg-gray-800 active:scale-95">
        Apply Filter
      </button>
    </div>
  );
};

export default OnSaleCategoryFilter;
