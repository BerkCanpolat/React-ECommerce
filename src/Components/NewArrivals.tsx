import { useEffect, useState } from "react";
import type { Products } from "../Api/types/Products.types";
import { useProducts } from "../Hooks/useProducts";
import { FaStar, FaStarHalf } from "react-icons/fa";
import { IMAGES } from "../Constants/images";
import Lottie from "lottie-react";


const NewArrivals = () => {
  const [perProducts, setPerProducts] = useState<Products[]>([]);
  const [page, setPage] = useState(1);

  const { data, isLoading, error, isFetching, refetch } = useProducts(page);

  useEffect(() => {
    if (data?.data) {
      setPerProducts((prev) => {
        const newItems = data.data.filter(
          (newItem) => !prev.some((oldItem) => oldItem._id === newItem._id)
        );
        return [...prev, ...newItems];
      });
    }
  }, [data]);

  if (isLoading && page === 1) {
    return (
        <div className="flex justify-center items-center">
            <Lottie animationData={IMAGES.LOADING} className="w-50 h-50"/>
        </div>
    )
  }

  if (error) {
    return (
        <div className="flex flex-col items-center">
            <img src={IMAGES.ERROR} alt="ERROR" className="w-180"/>
            <p className="text-2xl font-bold font-kalvin my-5">{(error as any)?.message || "Bir bağlantı sorunu oluştu"}</p>
            <button
            onClick={() => refetch()}
            className="bg-white text-black border border-gray-300 px-18 py-3 rounded-full font-kalvin font-medium transition-all duration-300 cursor-pointer hover:bg-black hover:text-white"
          >
             Try Again
          </button>
        </div>
    )
  }

  return (
    <section className="px-5 md:px-0 md:container md:m-auto">

        <h1 className="text-6xl uppercase font-extrabold font-serif text-center mt-25 mb-15">new arrıvals</h1>

      <div className="grid grid-cols-4 gap-6 place-items-center">
        {perProducts.map((products, i) => {
          return (
            <div key={i} className="">
              <div className="bg-[#F0EEED] w-73 h-80 rounded-3xl flex items-center justify-center overflow-hidden group cursor-pointer">
                <img
                  src={products.image}
                  alt={products.title}
                  className="w-50 h-65 object-cover rounded-lg transition-all duration-300 group-hover:scale-110 will-change-transform"
                />
              </div>
              <div>
                <p className="font-semibold mt-2 font-kalvin">{products.title}</p>
                <div className="flex items-center my-1.5">
                    <div className="flex items-center gap-0.5">
                    <FaStar className="text-amber-400" />
                    <FaStar className="text-amber-400"/>
                    <FaStar className="text-amber-400"/>
                    <FaStarHalf className="text-amber-400"/>
                    </div>
                    <p className="font-extralight text-sm font-kalvin">{products.rating}</p>
                </div>
                <h1 className="font-kalvin font-medium text-xl">${products.price}</h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center mt-10">
        {data && page < data.totalPages ? (
          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={isFetching}
            className="bg-white text-black border border-gray-300 px-18 py-3 rounded-full font-kalvin font-medium transition-all duration-300 cursor-pointer hover:bg-black hover:text-white"
          >
            {isFetching ? <Lottie animationData={IMAGES.LOADING} className="w-10 h-8 brightness-0 invert"/> : "Show More"}
          </button>
        ) : (
            <div>
                <p className="mt-5 mb-8 font-kalvin font-medium">No Other Products to Display!</p>
                <button
            className="bg-white text-black border border-gray-300 px-18 py-3 rounded-full font-kalvin font-medium transition-all duration-300 cursor-pointer hover:bg-black hover:text-white"
          >
             All Views
          </button>
            </div>
        )}
      </div>
    </section>
  );
};

export default NewArrivals;
