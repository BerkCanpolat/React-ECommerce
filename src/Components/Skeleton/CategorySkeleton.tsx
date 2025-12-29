const CategorySkeleton = () => {
  const skeletonCards = Array.from({ length: 8 });

  return (
    <div className="px-4 md:px-0 md:container md:mx-auto py-5">
      <div className="flex items-center space-x-2 mb-6 h-6 w-48 bg-gray-200 animate-pulse rounded" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skeletonCards.map((_, index) => (
          <div key={index} className="flex flex-col">
            <div className="w-full aspect-3/4 bg-gray-200 animate-pulse rounded-2xl mb-4" />
            
            <div className="h-5 w-3/4 bg-gray-200 animate-pulse rounded mb-2" />
            
            <div className="h-5 w-1/2 bg-gray-200 animate-pulse rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySkeleton;