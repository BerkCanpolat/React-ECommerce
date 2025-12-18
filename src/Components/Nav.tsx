import { NavLink } from "react-router-dom"
import { IMAGES } from "../Constants/images"
import { NAVIGATE_LINKS } from "../Constants/Navigation"
import { MdOutlineShoppingCart, MdKeyboardArrowDown } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoMdClose } from "react-icons/io"
import { CiSearch } from "react-icons/ci";
import { useState } from "react";




const Nav = () => {
    
    const [firstCloseDiv, setFirstCloseDiv] = useState<boolean>(true);
    const [openDropDownId, setOpenDropDownId] = useState<number | null>(null);

  return (
    <header>

        <div className={`bg-black py-1.5 transition-all duration-500 ${firstCloseDiv ? "py-1.5 opacity-100 max-h-20" : " py-0 opacity-0 max-h-0"}`}>
        <div className="flex items-center container m-auto">
            <p className="w-full text-center text-white">Sign up and get 20% off to your first order. <span className="font-medium underline">Sign Up Now</span></p>
            <IoMdClose className="cursor-pointer hover:text-red-500 hover:bg-white hover:rounded-md text-white transition-all duration-200 rounded-md" size={23} onClick={() => setFirstCloseDiv(false)}/>
        </div>
        </div>


        <div className="bg-white border-b border-gray-200/70">
        <div className="flex items-center justify-between container m-auto">
        <img src={IMAGES.LOGO} alt="" />
        <nav>
            <ul className="flex items-center gap-5.5 text-[17px] py-7 font-light">
                {
                    NAVIGATE_LINKS.map((link) => (
                        <li key={link.id}
                        className="relative"
                        onMouseEnter={() => link.hasDropDown && setOpenDropDownId(link.id)}
                        onMouseLeave={() => setOpenDropDownId(null)}>
                            <NavLink
                            to={link.path}
                            className={({ isActive }) => `transition-all duration-500 hover:text-red-500 ${isActive ? "text-red-500 border-b-2 border-red-500" : "text-gray-600"}`}>
                                <div className="flex items-center">
                                {link.title}
                                {link.hasDropDown && (
                                    <MdKeyboardArrowDown className={`transition-transform duration-300 ${openDropDownId === link.id ? "rotate-180": ""}`}/>
                                )}

                                </div>
                            </NavLink>
                            {
                                link.hasDropDown && (
                            <div className={`absolute left-0 top-full w-275 h-112.5 bg-white border border-gray-200 rounded-lg shadow-xl py-3 z-50 transition-all duration-500 ease-out ${openDropDownId === link.id ? "opacity-100 translate-y-7 visible" : "opacity-0 translate-y-0 invisible pointer-events-none"}`}>
                                <div className="absolute -top-10 left-0 w-full h-12 bg-transparent" />
                                <ul>
                                    {
                                        link.subLinks?.map((sub) => (
                                            <li key={sub.id}>
                                                <NavLink
                                                to={sub.path}
                                                className={"px-4"}>
                                                    {sub.title}    
                                                </NavLink>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                                )
                            }
                        </li>
                    ))
                }
            </ul>
        </nav>

        <div className="flex items-center bg-[#F0F0F0] rounded-full py-1.5 px-3.5 gap-1 border border-gray-300">
            <CiSearch size={21}/>
            <input type="text" className=" w-150 rounded-full border-none outline-none text-lg p-1 text-gray-700 placeholder:text-gray-500" placeholder="Search for products..."/>
        </div>
        <div className="flex items-center gap-1">
            <MdOutlineShoppingCart size={25} className="cursor-pointer"/>
            <CgProfile size={25} className="cursor-pointer"/>
        </div>
        </div>

        </div>
    </header>
  )
}

export default Nav