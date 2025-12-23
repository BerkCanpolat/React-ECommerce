import { IMAGES } from "../Constants/images"
import { NAVIGATE_LINKS } from "../Constants/Navigation"
import { MdOutlineShoppingCart, MdOutlineClear } from "react-icons/md";
import { CgProfile,CgMenuLeft } from "react-icons/cg";
import { IoMdClose } from "react-icons/io"
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import NavMenu from "./NavMenu";
import { motion } from "framer-motion";
import { headerVariants } from "../Constants/Animation";
import { Link } from "react-router-dom";

const Nav = () => {
    
    const [infoClose, setInfoClose] = useState<boolean>(true);
    const [openDropDownId, setOpenDropDownId] = useState<number | null>(null);
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    useEffect(() => {
        if(openMenu) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    }, [openMenu])

  return (
    <motion.header
    variants={headerVariants}
    initial="initial"
    animate="animate">

        <div className={`bg-black transition-all duration-500 ${infoClose ? "py-2.5 md:py-1.5 opacity-100 max-h-20" : " py-0 opacity-0 max-h-0"}`}>
        <div className="flex items-center px-5 md:px-0 md:container md:m-auto">
            <p className="w-full text-center text-white text-xs md:text-[16px]">Sign up and get 20% off to your first order. <span className="font-medium underline text-xs md:text-[16px] cursor-pointer">Sign Up Now</span></p>
            <IoMdClose className="cursor-pointer hover:text-red-500 hover:bg-white hover:rounded-md text-white transition-all duration-200 rounded-md text-lg md:text-2xl" onClick={() => setInfoClose(false)}/>
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
    
    <div className="flex items-center md:bg-[#F0F0F0] md:rounded-full md:py-1.5 md:px-3.5 md:gap-1 md:border md:border-gray-300">
        <CiSearch size={25} className="cursor-pointer md:cursor-default" />
        <input 
            type="text" 
            className="hidden md:block w-150 bg-transparent border-none outline-none text-lg p-1 text-gray-700 placeholder:text-gray-500" 
            placeholder="Search for products..."
        />
    </div>

    <div className="flex items-center gap-3 md:gap-5">
        <MdOutlineShoppingCart size={25} className="cursor-pointer"/>
        <CgProfile size={25} className="cursor-pointer"/>
    </div>
</div>
        </div>

        </div>
    </motion.header>
  )
}

export default Nav