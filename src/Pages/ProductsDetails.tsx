import { useParams } from "react-router-dom"
import { useProductDetail } from "../Hooks/useProducts";
import Breadcrumb from "../Components/BreadCrumb";
import { IMAGES } from "../Constants/images";
import { FaStar } from "react-icons/fa";
import ProductTabs from "../Components/ProducTabs";
import { useEffect, useState } from "react";
import ProductDetailsSkeleton from "../Components/Skeleton/ProductDetailSkeleton";
import { useCart } from "../Context/CartContext";
import { useAuth, useClerk } from "@clerk/clerk-react";
import { toast } from "react-toastify";


const ProductsDetails = () => {
    const { id } = useParams<{id: string}>();

    const { data: product, isLoading, error} = useProductDetail(id || 1);
    const { addToCard } = useCart();

    const { isSignedIn } = useAuth();
    const { openSignIn } = useClerk();

    const handleAddToCart = () => {
        if (!isSignedIn) {
            toast.info("Please sign in to add products to your cart!");
            openSignIn({
                fallbackRedirectUrl: window.location.href 
            });
            return;
        }

        if (product) {
            addToCard(product, count);
        }
    };

    const [selectedImage, setSelectedImage] = useState<string>("");
    const [count, setCount] = useState<number>(1);

    const handleIncrement = () => setCount(prev => prev + 1);
    const handleDecrement = () => {
        if (count > 1) setCount(prev => prev - 1);
    };

    useEffect(() => {
        if (product?.image) {
            setSelectedImage(product.image);
        }
    }, [product]);

    if (isLoading) return <ProductDetailsSkeleton />
    if (error || !product) return <div className="container mx-auto p-10 text-red-500 uppercase text-4xl">Product not found!!</div>;

    const productImages = [product.image, IMAGES.CASUAL, IMAGES.WOMEN];

  return (
    <section className="container mx-auto">
        <Breadcrumb customName={product.title}/>
        <div className="flex flex-col md:flex-row items-start gap-10">

            <div className="flex flex-col-reverse md:flex-row items-center max-sm:justify-center max-sm:w-full gap-2.5 md:gap-5">
                <div className="flex flex-row md:flex-col items-center gap-2.5">
                    {
                        productImages.map((images,index) => (
                            <img key={index} src={images} alt="img" onClick={() => setSelectedImage(images)} className={`w-28 h-28 object-cover md:w-68 md:h-48.5 rounded-2xl cursor-pointer ${selectedImage === images ? "border boder-black shadow-lg" : "border-transparent opacity-70 hover:opacity-100"}`}/>
                        ))
                    }
                </div>
                <div>
                    <img src={selectedImage || product.image} alt="" className="w-90 md:w-120 md:h-151 rounded-2xl object-cover cursor-pointer"/>
                </div>
            </div>

            <div className="flex flex-col px-4 md:px-0">
                <h1 className="text-3xl md:text-6xl font-kalvin font-extrabold tracking-tighter truncate w-90 md:w-170 mb-0 md:mb-3 md:-mt-1.5">{product.title}</h1>
                <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5 my-2 md:my-5 text-amber-400">
                                                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                                            </div>
                                            <p className="font-medium md:font-extralight text-xs md:text-sm font-kalvin">{product.rating}</p>
                </div>
                <div className="flex items-center gap-3.5 mb-4.5">
                    <h1 className="text-2xl font-medium md:text-4xl md:font-bold">${product.price}</h1>
                    <h1 className="text-xl font-medium md:text-2xl md:font-bold text-gray-400 line-through">${product.oldPrice}</h1>
                    <h1 className="text-xs font-medium px-1.5 py-1 md:text-sm bg-pink-100 text-red-500 md:font-bold rounded-full md:px-2 md:py-1.5">-{product.discountedPrice}%</h1>
                </div>
                <p className="text-gray-500 max-sm:line-clamp-5 max-sm:w-90 text-sm mb-3 md:text-md tracking-wide md:mb-5 max-w-175">{product.description}</p>
                <div className="w-full bg-gray-300 h-px rounded-full container mx-auto"/>
                <div className="my-4">
                <p className="mb-2.5 text-gray-500">Select Colors</p>
                <div className="flex items-center gap-3.5 mb-2">
                    <div className="w-10 h-10 bg-green-700 rounded-full"/>
                    <div className="w-10 h-10 bg-purple-700 rounded-full"/>
                    <div className="w-10 h-10 bg-red-700 rounded-full"/>
                </div>
                </div>
                <div className="w-full bg-gray-300 h-px rounded-full container mx-auto"/>
                <div className="my-4.5">
                <p className="text-gray-500 mb-2.5">Choose Size</p>
                <div className="flex flex-wrap items-center mb-1 gap-2 md:mb-2">
                    {
                        product.size.map((s,i) => (
                            <button key={i} className="bg-gray-200 px-10 py-2 md:px-12 md:py-3 rounded-full text-gray-600 cursor-pointer hover:bg-black hover:text-white transition-all duration-300">
                                {s}
                            </button>
                        ))
                    }
                </div>
                </div>
                <div className="w-full bg-gray-300 h-px rounded-full container mx-auto"/>
                <div className="flex items-center gap-5 md:gap-10 mt-7.5">
                    <div className="flex items-center gap-6.5 md:gap-10 bg-gray-200 rounded-full px-4 py-1.5 md:px-6 md:py-3">
                        <button className="text-2xl md:text-3xl cursor-pointer" onClick={handleDecrement}>-</button>
                        <h1 className="font-kalvin font-medium text-md md:text-xl">{count}</h1>
                        <button className="text-2xl md:text-3xl cursor-pointer" onClick={handleIncrement}>+</button>
                    </div>
                    <div>
                        <button className="px-17 py-2.5 text-md md:px-34 md:py-3 bg-black text-white rounded-full md:text-2xl cursor-pointer hover:bg-gray-200 hover:text-black transition-all duration-300" onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>

        <ProductTabs />
    </section>
  )
}

export default ProductsDetails