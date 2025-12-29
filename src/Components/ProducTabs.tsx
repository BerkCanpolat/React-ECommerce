import { useState } from "react";
import { FaStar, FaCheckCircle, FaEllipsisH, FaSlidersH } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("reviews");

  const reviews = [
    { id: 1, name: "Samantha D.", date: "August 14, 2023", text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable..." },
    { id: 2, name: "Alex M.", date: "August 15, 2023", text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch..." },
  ];

  return (
    <div className="container mx-auto px-4 mt-20">
      <div className="flex border-b border-gray-200 text-center mb-8">
        {["Product Details", "Rating & Reviews", "FAQs"].map((tab) => {
          const tabKey = tab.toLowerCase().includes("reviews") ? "reviews" : tab.toLowerCase().includes("details") ? "details" : "faq";
          return (
            <button
              key={tabKey}
              onClick={() => setActiveTab(tabKey)}
              className={`flex-1 pb-4 text-sm md:text-lg font-medium transition-all duration-300 border-b-2 ${
                activeTab === tabKey ? "border-black text-black" : "border-transparent text-gray-400"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div>
        {activeTab === "details" && (
          <div className="py-10 text-gray-600">
            <h2 className="text-2xl font-bold mb-4">Product Specifications</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem temporibus illum corrupti ratione neque doloribus itaque dolore nisi odit at dicta autem saepe molestias, magnam, quisquam distinctio, cumque reprehenderit facilis.</p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl md:text-2xl font-bold">
                All Reviews <span className="text-gray-400 font-normal text-sm">(451)</span>
              </h2>
              <div className="flex items-center gap-3">
                <button className="bg-[#F0F0F0] p-3 rounded-full"><FaSlidersH /></button>
                <button className="hidden md:flex items-center gap-2 bg-[#F0F0F0] px-5 py-3 rounded-full font-medium">
                  Latest <IoIosArrowDown />
                </button>
                <button className="bg-black text-white px-5 py-3 rounded-full text-sm md:text-base">
                  Write a Review
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {reviews.map((review) => (
                <div key={review.id} className="border border-gray-200 rounded-3xl p-6 relative">
                  <button className="absolute right-6 top-6 text-gray-400"><FaEllipsisH /></button>
                  <div className="flex text-amber-400 gap-1 mb-3">
                    {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-bold text-lg">{review.name}</span>
                    <FaCheckCircle className="text-green-500" />
                  </div>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 italic">
                    "{review.text}"
                  </p>
                  <p className="text-gray-500 font-medium text-sm">Posted on {review.date}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <button className="border border-gray-200 px-10 py-4 rounded-full font-medium hover:bg-black hover:text-white transition-all">
                Load More Reviews
              </button>
            </div>
          </div>
        )}

        {activeTab === "faq" && (
          <div className="py-10 text-gray-600">
            <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quis odit earum aut cupiditate illum, inventore dolores recusandae ex iure dolorum et veniam aperiam porro quo hic cumque in dicta?</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductTabs;