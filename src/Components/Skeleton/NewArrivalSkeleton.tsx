const NewArrivalsSkeleton = () => {
  return (
    <section className="px-5 md:px-0 md:container md:m-auto py-10">
      <div className="h-10 md:h-14 w-64 bg-gray-200 animate-pulse mx-auto mb-10 rounded-xl" />
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex flex-col gap-4">
            <div className="aspect-square w-full bg-gray-200 animate-pulse rounded-[20px]" />
            <div className="h-5 w-3/4 bg-gray-200 animate-pulse rounded-md" />
            <div className="h-4 w-1/4 bg-gray-200 animate-pulse rounded-md" />
            <div className="h-6 w-1/2 bg-gray-200 animate-pulse rounded-md" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivalsSkeleton;