import { Link } from "react-router-dom";
import type { Products } from "../Api/types/Products.types"
import { FaStar, FaStarHalf } from "react-icons/fa";
import React from "react";

interface ArrivalMapProps {
    products: Products;
}

const ArrivalMap = ({ products }: ArrivalMapProps) => {
  return (
    <Link to={`/products/${products._id}`}>
    <div>
                  <div className="bg-[#F0EEED] w-40 h-55 md:w-73 md:h-80 rounded-3xl flex items-center justify-center cursor-pointer">
                    <img
                      src={`${products.image}?auto=compress&cs=tinysrgb&w=500`}
                      alt={products.title}
                      loading="lazy"
                      decoding="async"
                      className="aspect-video h-45 md:w-50 md:h-65 object-cover rounded-lg bg-[#f0f0f0]"
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
                    <div className="flex items-center gap-2.5">
                    <h1 className="font-kalvin font-medium text-sm md:text-xl">${products.price}</h1>
                    <h1 className="font-kalvin font-medium text-sm md:text-xl text-gray-400 line-through">${products.oldPrice}</h1>
                    <h1 className="text-xs font-medium px-1.5 py-1 md:text-sm bg-pink-100 text-red-500 md:font-bold rounded-full md:px-2 md:py-1.5">-{products.discountedPrice}%</h1>
                    </div>
                  </div>
                </div>
    </Link>
  )
}

export default React.memo(ArrivalMap);