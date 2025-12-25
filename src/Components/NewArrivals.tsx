import { useEffect, useState } from "react";
import type { Products } from "../Api/types/Products.types";
import { useProducts } from "../Hooks/useProducts";
import { IMAGES } from "../Constants/images";
import Lottie from "lottie-react";
import ArrivalMap from "./ArrivalMap";
import NewArrivalsSkeleton from "./Skeleton/NewArrivalSkeleton";


const NewArrivals = () => {
    const PER_PAGE = 4; 
  const [perProducts, setPerProducts] = useState<Products[]>([]);
  const [page, setPage] = useState(1);

  const { data, isLoading, error, isFetching, refetch } = useProducts(page, PER_PAGE);

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
    return <NewArrivalsSkeleton />
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

        <h1 className="text-3xl md:text-6xl uppercase font-extrabold font-serif text-center mt-15 mb-10 md:mt-25 md:mb-15">new arrıvals</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 place-items-center">
        {perProducts.map((products) => {
          return (
            <ArrivalMap products={products} key={products._id}/>
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
