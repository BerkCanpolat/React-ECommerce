
const TestimonialsSkeleton = () => {
  return (
    <div className="overflow-hidden my-25 container mx-auto">
      <div className="flex items-center justify-between px-4 md:px-0 mb-8">
        <div className="h-10 md:h-12 w-64 bg-gray-200 animate-pulse rounded-lg" />
        <div className="flex gap-3">
          <div className="w-10 h-10 bg-gray-200 animate-pulse rounded-full" />
          <div className="w-10 h-10 bg-gray-200 animate-pulse rounded-full" />
        </div>
      </div>

      <div className="flex gap-5 px-4 md:px-0">
        {[...Array(4)].map((_, i) => (
          <div 
            key={i} 
            className="min-w-75 md:min-w-100 bg-white p-8 rounded-3xl border border-gray-100 h-72 flex flex-col gap-4 shadow-sm"
          >
            <div className="flex gap-1">
              {[...Array(5)].map((_, j) => (
                <div key={j} className="w-5 h-5 bg-gray-200 animate-pulse rounded-full" />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-32 bg-gray-200 animate-pulse rounded-md" />
              <div className="w-5 h-5 bg-gray-200 animate-pulse rounded-full" />
            </div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-100 animate-pulse rounded" />
              <div className="h-4 w-full bg-gray-100 animate-pulse rounded" />
              <div className="h-4 w-3/4 bg-gray-100 animate-pulse rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSkeleton;