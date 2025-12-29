const ProductDetailsSkeleton = () => {
  return (
    <section className="container mx-auto px-4 md:px-0">
      <div className="h-4 w-48 bg-gray-200 animate-pulse rounded my-8" />

      <div className="flex flex-col md:flex-row items-start gap-10">
        <div className="flex flex-col-reverse md:flex-row items-center max-sm:w-full gap-2.5 md:gap-5">
          <div className="flex flex-row md:flex-col items-center gap-2.5">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-28 h-28 md:w-32 md:h-32 bg-gray-200 animate-pulse rounded-2xl"
              />
            ))}
          </div>
          <div className="w-full max-w-112.5 aspect-4/5 md:w-120 md:h-151 bg-gray-200 animate-pulse rounded-2xl" />
        </div>

        <div className="flex flex-col w-full">
          <div className="h-10 md:h-16 w-3/4 md:w-170 bg-gray-200 animate-pulse rounded mb-4" />

          <div className="h-6 w-32 bg-gray-200 animate-pulse rounded mb-6" />

          <div className="flex items-center gap-3.5 mb-6">
            <div className="h-8 w-24 bg-gray-200 animate-pulse rounded" />
            <div className="h-6 w-20 bg-gray-200 animate-pulse rounded" />
            <div className="h-8 w-16 bg-gray-200 animate-pulse rounded-full" />
          </div>

          <div className="space-y-2 mb-8">
            <div className="h-4 w-full bg-gray-200 animate-pulse rounded" />
            <div className="h-4 w-5/6 bg-gray-200 animate-pulse rounded" />
            <div className="h-4 w-4/6 bg-gray-200 animate-pulse rounded" />
          </div>

          <div className="w-full bg-gray-200 h-px mb-6" />

          <div className="mb-6">
            <div className="h-4 w-24 bg-gray-200 animate-pulse rounded mb-3" />
            <div className="flex gap-3.5">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-10 h-10 bg-gray-200 animate-pulse rounded-full" />
              ))}
            </div>
          </div>

          <div className="w-full bg-gray-200 h-px mb-6" />

          <div className="mb-6">
            <div className="h-4 w-24 bg-gray-200 animate-pulse rounded mb-3" />
            <div className="flex gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-10 w-28 bg-gray-200 animate-pulse rounded-full" />
              ))}
            </div>
          </div>

          <div className="w-full bg-gray-200 h-px mb-8" />

          <div className="flex items-center gap-5">
            <div className="h-12 w-32 md:w-40 bg-gray-200 animate-pulse rounded-full" />
            <div className="h-12 flex-1 max-w-100 bg-gray-200 animate-pulse rounded-full" />
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex justify-around border-b border-gray-100 mb-10 pb-4">
          <div className="h-6 w-32 bg-gray-100 animate-pulse rounded" />
          <div className="h-6 w-32 bg-gray-100 animate-pulse rounded" />
          <div className="h-6 w-32 bg-gray-100 animate-pulse rounded" />
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsSkeleton;