import Breadcrumb from "../Components/BreadCrumb";
import { useCart } from "../Context/CartContext"
import { RiDeleteBinFill } from "react-icons/ri";
import { GoTag } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";
import { useMemo } from "react";
import Lottie from "lottie-react";
import { IMAGES } from "../Constants/images";
import { Link } from "react-router-dom";
import { RedirectToSignIn, useAuth } from "@clerk/clerk-react";




const Cart = () => {
    const { cartItem, updateQuantity, deleteItem, clearCart } = useCart();

    const { subtotal, deliveryFee, total } = useMemo(() => {
    const sub = cartItem.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const delivery = sub > 0 ? 15 : 0;
    const finalTotal = sub + delivery;
    return {
        subtotal: sub,
        deliveryFee: delivery,
        total: finalTotal
    };
}, [cartItem]);

const { isSignedIn, isLoaded } = useAuth();
    if (!isLoaded) return null; 
    if (!isSignedIn) {
        return <RedirectToSignIn />;
    }


  return (
    <section className="container mx-auto">
        <Breadcrumb />
        {
            cartItem.length > 0 ? (
                <>
        <h1 className="mt-5 mb-5 max-sm:mx-2 text-3xl md:text-5xl font-kalvin font-extrabold">YOUR CART</h1>

        <div className="flex items-start justify-between flex-wrap gap-5 md:gap-0">
            <div className="border border-gray-300 rounded-xl px-1 md:px-12 pb-5 md:w-220 max-sm:mx-2">
                {
                    cartItem.map((cart) => (
                        <div key={cart._id}>
                        <div className="flex items-center gap-2.5 md:gap-5 pt-5">
                            <div>
                                <img src={cart.image} alt="cartimage" className="w-35 h-35 rounded object-cover"/>
                            </div>
                            <div className="flex items-center justify-between w-full">
                                <div className="flex flex-col gap-1">
                                <h1 className="text-md md:text-2xl font-bold font-kalvin truncate w-35 md:w-105">{cart.title}</h1>
                                <p className="text-xs md:text-sm font-kalvin text-gray-500"><span className="text-black">Brand:</span> {cart.brand}</p>
                                <p className="text-xs dm:text-sm font-kalvin text-gray-500"><span className="text-black">Type:</span> {cart.type}</p>
                                <h1 className="text-xl md:text-2xl font-kalvin font-bold mt-11 md:mt-6.5">${cart.price}</h1>
                                </div>
                                <div className="flex flex-col items-end gap-17">
                                    <RiDeleteBinFill onClick={() => deleteItem(cart._id)} className="text-2xl text-red-500 hover:active:text-black"/>
                                     <div className="flex items-center gap-4.5 md:gap-5 bg-gray-200 rounded-full px-4 py-1.5 md:px-5.5 md:py-1.5">
                        <button className="text-2xl md:text-2xl cursor-pointer" onClick={() => updateQuantity(cart._id, "decrease")}>-</button>
                        <h1 className="font-kalvin font-medium text-md md:text-md">{cart.quantity}</h1>
                        <button className="text-2xl md:text-2xl cursor-pointer" onClick={() => updateQuantity(cart._id, "increase")}>+</button>
                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full bg-gray-300 h-px rounded-full container mx-auto mt-5"/>
                        </div>
                    ))
                }
            </div>

            <div className="border border-gray-300 rounded-xl px-1.5 md:px-12 pb-5 pt-5 max-sm:mx-2">
                <h1 className="text-2xl font-kalvin font-bold">Order Summary</h1>
                <div className="flex items-center justify-between my-2.5">
                    <h1 className="text-gray-500 text-lg">Subtotal</h1>
                    <h1 className="font-kalvin font-medium">${subtotal.toLocaleString()}</h1>
                </div>
                <div className="flex items-center justify-between my-2.5">
                    <h1 className="text-gray-500 text-lg">Delivery Free</h1>
                    <h1 className="font-kalvin font-medium">${deliveryFee}</h1>
                </div>
                <div className="w-full bg-gray-300 h-px rounded-full container mx-auto my-5"/>
                <div className="flex items-center justify-between my-5">
                    <h1 className="text-black text-lg">Total</h1>
                    <h1 className="font-kalvin font-bold text-xl">${total.toLocaleString()}</h1>
                </div>
                <div className="flex items-center gap-2.5">
                    <div className="flex items-center gap-3 bg-[#F0F0F0] px-5 py-3 rounded-full">
                        <GoTag />
                        <input type="text" placeholder="Add promo code" className="w-full outline-none border-none"/>
                    </div>
                    <div>
                        <button className="px-10 py-3 rounded-full bg-black text-white">Apply</button>
                    </div>
                </div>
                <Link to={"/success"}>
                <button className="flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-all duration-300 gap-2.5 w-full py-3 rounded-full bg-black text-white mt-4" onClick={clearCart}>Go to Checkout <FaArrowRight /></button>
                </Link>
            </div>
        </div>
                
                
                </>
            ) : (
                <div className="flex flex-col items-center justify-center">
                    <Lottie animationData={IMAGES.EMPTY_CART} className="w-75 md:w-150"/>
                    <h1 className="text-xl md:text-2xl font-kalvin font-bold my-5 md:my-10">Your cart is empty! To shop</h1>
                    <Link to={"/onsale"}>
                    <button className="bg-transparent border border-gray-400 text-black rounded px-12 py-1.5 cursor-pointer hover:bg-black hover:text-white transition-all duration-300 text-2xl font-bold font-kalvin">Product</button>
                    </Link>
                </div>
            )
        }
    </section>
  )
}

export default Cart