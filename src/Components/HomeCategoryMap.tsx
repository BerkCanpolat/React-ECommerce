import { CATEGORY_IMAGES, IMAGES } from "../Constants/images";

interface HomeCategoryMapProps {
    c: string,
    i: number,
    colSpan: string
}

const HomeCategoryMap = ({ c, i, colSpan }: HomeCategoryMapProps) => {
  return (
    <div key={i} className={`${colSpan}`}>
      <div className="relative group overflow-hidden rounded-2xl cursor-pointer">
        <img
          src={CATEGORY_IMAGES[c] ?? IMAGES.MAIN_BG}
          alt={c}
          className="w-full h-60 object-cover rounded-2xl transition-all duration-300 group-hover:scale-110"
        />
        <h1 className="absolute left-5 top-5 font-kalvin font-medium text-xl bg-white rounded-xl p-2">
          {c}
        </h1>
      </div>
    </div>
  );
};

export default HomeCategoryMap;
