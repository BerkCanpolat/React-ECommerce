
interface Props {
  styleTwo: string;
}

const HomeCategorySkeleton = ({ styleTwo }: Props) => {
  return (
    <section className={`px-4 md:px-0 md:container md:mx-auto pt-10 pb-10 md:pt-15 md:pb-15 rounded-4xl ${styleTwo}`}>
      <div className="h-12 w-3/4 md:w-1/3 bg-gray-300 animate-pulse mx-auto mb-10 rounded-xl" />

      <div className="md:max-w-6xl md:mx-auto grid grid-cols-1 md:grid-cols-6 gap-4.5 md:gap-6">
        <div className="col-span-1 md:col-span-2 h-60 bg-gray-300 animate-pulse rounded-2xl" />
        <div className="col-span-1 md:col-span-4 h-60 bg-gray-300 animate-pulse rounded-2xl" />
        <div className="col-span-1 md:col-span-4 h-60 bg-gray-300 animate-pulse rounded-2xl" />
        <div className="col-span-1 md:col-span-2 h-60 bg-gray-300 animate-pulse rounded-2xl" />
        <div className="col-span-1 md:col-span-2 h-60 bg-gray-300 animate-pulse rounded-2xl" />
      </div>
    </section>
  );
};

export default HomeCategorySkeleton;