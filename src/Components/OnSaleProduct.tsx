import { useEffect, useState } from "react";
import { useProducts } from "../Hooks/useProducts";
import ArrivalMap from "./ArrivalMap";
import NewArrivalsSkeleton from "./Skeleton/NewArrivalSkeleton";
import { IMAGES } from "../Constants/images";
import PaginationButton from "./PaginationButton";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const OnSaleProduct = ({
  category,
  maxPrice,
}: {
  category: string | null;
  maxPrice: number;
}) => {
  const DEFAULT_MAX_PRICE = 99999;
  const isFiltering = Boolean(category) || maxPrice !== DEFAULT_MAX_PRICE;

  const PER_PAGE = isFiltering ? 9999 : 9;

  useEffect(() => {
    setPage(1);
  }, [category, maxPrice]);

  const [page, setPage] = useState<number>(1);
  const {
    data: saledata,
    isLoading,
    error,
    isFetching,
    refetch,
  } = useProducts(page, PER_PAGE);

  const filteredProducts =
    saledata?.data.filter((product) => {
      const categoryMatch = category
        ? product.category.toLowerCase() === category.toLowerCase()
        : true;

      const priceMatch = product.price <= maxPrice;

      return categoryMatch && priceMatch;
    }) || [];

  if (isLoading && page === 1) {
    return <NewArrivalsSkeleton />;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center">
        <img src={IMAGES.ERROR} alt="ERROR" className="w-180" />
        <p className="text-2xl font-bold font-kalvin my-5">
          {(error as any)?.message || "Bir bağlantı sorunu oluştu"}
        </p>
        <button
          onClick={() => refetch()}
          className="bg-white text-black border border-gray-300 px-18 py-3 rounded-full font-kalvin font-medium transition-all duration-300 cursor-pointer hover:bg-black hover:text-white"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <section className="max-sm:flex max-sm:items-center max-sm:justify-center max-sm:flex-col container mx-auto">
      <div className="grid grid-cols-2 gap-y-5 gap-x-8 md:grid-cols-3 md:gap-y-12">
        {filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ArrivalMap products={product} key={product._id} />
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <p className="text-gray-400 italic">
              No products matching your criteria were found.
            </p>
          </div>
        )}
      </div>
      <div className="w-full bg-gray-300 h-px rounded-full mt-10" />
      <div className="mb-10 md:mb-20">
        {!isFiltering && saledata?.data && saledata.totalPages > 1 && (
          <div className="flex items-center justify-center md:justify-between gap-2 mt-5.5">
            <PaginationButton
              disabled={isFetching || page === 1}
              onClick={() => setPage((prev) => prev - 1)}
              title="Previous"
              icon={<FaArrowLeft />}
            />
            <div className="flex items-center gap-1">
              {Array.from(
                { length: saledata?.totalPages || 0 },
                (_, i) => i + 1
              ).map((num) => (
                <button
                  key={num}
                  onClick={() => setPage(num)}
                  disabled={isFetching}
                  className={`w-6.5 h-6.5 md:w-10 md:h-10 rounded-lg font-kalvin transition-all cursor-pointer ${
                    page === num
                      ? "bg-black text-white"
                      : "hover:bg-gray-100 text-gray-500"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
            <PaginationButton
              disabled={isFetching || page === saledata.totalPages}
              onClick={() => setPage((prev) => prev + 1)}
              title="Next"
              icon={<FaArrowRight />}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default OnSaleProduct;
