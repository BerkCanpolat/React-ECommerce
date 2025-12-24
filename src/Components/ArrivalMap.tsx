import type { Products } from "../Api/types/Products.types"
import { FaStar, FaStarHalf } from "react-icons/fa";

interface ArrivalMapProps {
    products: Products;
}

const ArrivalMap = ({ products }: ArrivalMapProps) => {
  return (
    <div className="">
                  <div className="bg-[#F0EEED] w-40 h-55 md:w-73 md:h-80 rounded-3xl flex items-center justify-center cursor-pointer">
                    <img
                      src={products.image}
                      alt={products.title}
                      className="w-30 h-45 md:w-50 md:h-65 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="font-semibold mt-1 md:mt-2 font-kalvin text-xs truncate md:text-lg">{products.title}</p>
                    <div className="flex items-center my-0.5 md:my-1.5">
                        <div className="flex items-center gap-0.5">
                        <FaStar className="text-amber-400 text-xs md:text-lg" />
                        <FaStar className="text-amber-400 text-xs md:text-lg"/>
                        <FaStar className="text-amber-400 text-xs md:text-lg"/>
                        <FaStarHalf className="text-amber-400 text-xs md:text-lg"/>
                        </div>
                        <p className="font-extralight text-xs md:text-sm font-kalvin">{products.rating}</p>
                    </div>
                    <h1 className="font-kalvin font-medium text-sm md:text-xl">${products.price}</h1>
                  </div>
                </div>
  )
}

export default ArrivalMap