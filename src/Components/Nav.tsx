import { IMAGES } from "../Constants/images"
import { NAVIGATE_LINKS } from "../Constants/Navigation"
import { MdOutlineShoppingCart, MdOutlineClear } from "react-icons/md";
import { CgProfile,CgMenuLeft } from "react-icons/cg";
import { IoMdClose } from "react-icons/io"
import { CiSearch } from "react-icons/ci";
import { useEffect, useMemo, useRef, useState } from "react";
import NavMenu from "./NavMenu";
import { motion } from "framer-motion";
import { headerVariants } from "../Constants/Animation";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { useProducts } from "../Hooks/useProducts";
import Lottie from "lottie-react";
import { SignedIn, SignedOut, SignInButton, useAuth, useClerk, UserButton } from "@clerk/clerk-react";
import { toast } from "react-toastify";

const Nav = () => {
    
    const [infoClose, setInfoClose] = useState<boolean>(true);
    const [openDropDownId, setOpenDropDownId] = useState<number | null>(null);
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [searchOpen, setSearchOpen] = useState<boolean>(false);
    const [searchInput, setSearchInput] = useState<string>("");
    const [debouncedInput, setDebouncedInput] = useState<string>("");
    const { cartItem } = useCart();
    const { data: searchData, isLoading } = useProducts(1, 30);
    const searchRef = useRef<HTMLDivElement>(null);
    const { isSignedIn } = useAuth();
const { openSignIn } = useClerk();

const handleCartClick = (e: React.MouseEvent) => {
    if (!isSignedIn) {
        e.preventDefault();
        toast.info("Please sign in to view your cart!");
        openSignIn({
            fallbackRedirectUrl: "/cart"
        });
    }
};

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if(searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setSearchOpen(false);
                setSearchInput("");
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [])

    useEffect(() => {
        if(openMenu) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [openMenu]);

useEffect(() => {
    const handler = setTimeout(() => {
        setDebouncedInput(searchInput);
    }, 300);

    return () => clearTimeout(handler);
}, [searchInput]);

const filteredProducts = useMemo(() => {
    if (!debouncedInput.trim() || !searchData) return [];

    return searchData.data.filter((product) =>
        product.title.toLowerCase().includes(debouncedInput.toLowerCase())
    );
}, [debouncedInput, searchData]);

useEffect(() => {
    if (searchInput.trim() === "") {
        setSearchOpen(false);
    } else {
        setSearchOpen(true);
    }
}, [searchInput]);

  return (
    <motion.header
    variants={headerVariants}
    initial="initial"
    animate="animate"
    className="sticky top-0 w-full z-100">

        <div className={`bg-black transition-all duration-500 ${infoClose ? "py-2.5 md:py-1.5 opacity-100 max-h-20" : " py-0 opacity-0 max-h-0"}`}>
  <div className="flex items-center px-5 md:px-0 md:container md:m-auto">
    <div className="w-full text-center text-white text-xs md:text-[16px]">
      <SignedOut>
        <p>
          Sign up and get 20% off to your first order.
          <SignInButton mode="modal">
            <span className="font-medium underline cursor-pointer hover:text-gray-300 transition-colors">
              Sign Up Now
            </span>
          </SignInButton>
        </p>
      </SignedOut>
      
      <SignedIn>
        <p>Welcome back! Enjoy your special discounts. 🎉</p>
      </SignedIn>
    </div>
    
    <IoMdClose 
      className="cursor-pointer hover:text-red-500 hover:bg-white hover:rounded-md text-white transition-all duration-200 rounded-md text-lg md:text-2xl" 
      onClick={() => setInfoClose(false)}
    />
  </div>
</div>


        <div className="bg-white border-b border-gray-200/70">
        <div className="flex items-center justify-between px-5 md:px-0 md:container md:m-auto">
            <div className="flex items-center gap-8.5">
                <CgMenuLeft className="md:hidden" size={24} onClick={() => setOpenMenu((prev) => !prev)}/>
                    <Link to={"/"}>
        <img src={IMAGES.LOGO} alt="LOGO" className="w-22 md:w-38"/>
                    </Link>

            </div>
        <nav className="relative py-8.5 md:py-0">
            <ul className={`fixed left-0 top-0 bg-white h-screen w-full flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-5.5 md:text-[17px] px-3.5 md:px-0 py-5.5 md:py-7 font-light md:static md:h-auto md:w-auto md:translate-x-0 transition-translate duration-500 z-50 ${openMenu ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex items-center justify-between w-full mb-5.5 md:hidden">
                    <img src={IMAGES.LOGO} alt="LOGO" className="w-22 md:w-38"/>
                <MdOutlineClear size={25} onClick={() => setOpenMenu((prev) => !prev)}/>
                </div>
                {
                    NAVIGATE_LINKS.map((link) => (
                        <NavMenu key={link.id} link={link} setOpenDropDownId={setOpenDropDownId} openDropDownId={openDropDownId}/>
                    ))
                }
            </ul>
        </nav>

<div className="flex items-center gap-3 md:gap-5">
    
    <div className="relative flex items-center md:bg-[#F0F0F0] md:rounded-full md:py-1.5 md:px-3.5 md:gap-1 md:border md:border-gray-300" onClick={() => setSearchOpen(true)} ref={searchRef}>
        <CiSearch size={25} className="hidden md:block cursor-pointer md:cursor-default" />
        <input 
            type="text" 
            className="w-30 border rounded-full border-gray-400 md:w-150 bg-transparent md:border-none outline-none text-[10px] md:text-lg p-1 text-gray-700 placeholder:text-gray-500" 
            placeholder="Search for products..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
        />
        {
            searchOpen && (
        <div className="absolute top-10 -left-41 w-91.5 md:top-15 md:left-0 md:w-full max-h-100 overflow-y-auto bg-white rounded border border-gray-300 shadow-md px-4 pt-4 py-4 will-change-scroll">
            {
                isLoading ? (
                    <div className="flex flex-col items-center justify-center p-5 gap-2">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black"></div>
                <p className="text-gray-500 text-sm font-kalvin">Searching products...</p>
            </div>
                ) : (
                    
                        filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <Link 
                                key={product._id} 
                                to={`/products/${product._id}`}
                                onClick={() => {
                                    setSearchInput("");
                                    setSearchOpen(false);
                                }}
                                className="flex items-center gap-4 p-3 hover:bg-gray-200 hover:rounded transition-colors border-b border-gray-300 last:border-none"
                            >
                                <img src={`${product.image}?auto=compress&cs=tinysrgb&w=200`} alt={product.title} 
                                loading="lazy" 
                                decoding="async"
                                className="w-12 h-12 object-cover rounded" />
                                <div className="flex flex-col">
                                    <h2 className="text-sm font-bold text-black truncate w-48 md:w-80">{product.title}</h2>
                                    <p className="text-xs text-gray-500">${product.price}</p>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="flex flex-col items-center justify-center">
                        <Lottie animationData={IMAGES.SEARCH_ICON} className="w-75 md:w-100"/>
                        <h1 className="text-gray-800 font-bold text-sm md:text-md">Try searching for, <span className="font-kalvin font-bold text-lg md:text-xl">Long Sleeve Jacket</span></h1>
                    </div>
                    )
                
                )
            }
        </div>
            )
        }
    </div>

    <div className="flex items-center gap-3 md:gap-5">
        <Link to={"/cart"} className="relative" onClick={handleCartClick}>
        <MdOutlineShoppingCart size={25} className="cursor-pointer"/>
        {
            cartItem.length > 0 && (
                <h1 className="text-white bg-red-500 px-1.5 text-xs rounded-full absolute -top-2.5 -right-1.5">{cartItem.length}</h1>
            )
        }
        </Link>
    <SignedOut>
        <SignInButton mode="modal">
            <div className="cursor-pointer flex items-center">
                <CgProfile size={25} />
            </div>
        </SignInButton>
    </SignedOut>

    <SignedIn>
        <UserButton />
    </SignedIn>
    </div>
</div>
        </div>

        </div>
    </motion.header>
  )
}

export default Nav