import { Link, useLocation } from "react-router-dom";
import { CATEGORY_IMAGES, IMAGES } from "../Constants/images";

interface HomeCategoryMapProps {
    c: string,
    i: number,
    colSpan: string
}

const HomeCategoryMap = ({ c, i, colSpan }: HomeCategoryMapProps) => {

  const location = useLocation();

  const formatPathName = (path: string) => {
    if (path === "/") return "Home";
    const lastPart = path.split("/").filter(Boolean).at(-1) || "Home";
    return lastPart;
  };

  return (
    <Link to={`category/${c}`} 
    state={{ 
        fromPath: location.pathname,
        fromName: formatPathName(location.pathname),
    }}
    className={`${colSpan}`}>
    <div key={i}>
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
    </Link>
  );
};

export default HomeCategoryMap;
