import { MdKeyboardArrowDown } from "react-icons/md"
import { NavLink } from "react-router-dom"
import type { NavLink as MyNavLink } from "../Constants/Navigation"

interface NavMenuProps {
    link: MyNavLink;
    openDropDownId: number | null;
    setOpenDropDownId: (id: number | null) => void;
}


const NavMenu = ({ link, setOpenDropDownId, openDropDownId }: NavMenuProps) => {
  return (
    <li key={link.id}
                        className="relative text-xl font-medium mb-3"
                        onMouseEnter={() => link.hasDropDown && setOpenDropDownId(link.id)}
                        onMouseLeave={() => setOpenDropDownId(null)}>
                            <NavLink
                            to={link.path}
                            className={({ isActive }) => `transition-all duration-300 inline-block hover:text-fuchsia-900 ${isActive ? "text-fuchsia-900 scale-105" : "text-gray-600"}`}>
                                <div className="flex items-center">
                                {link.title}
                                {link.hasDropDown && (
                                    <MdKeyboardArrowDown className={`transition-transform duration-300 ${openDropDownId === link.id ? "rotate-180": ""}`}/>
                                )}

                                </div>
                            </NavLink>
                            {
                                link.hasDropDown && (
                            <div className={`h-0 static md:absolute md:left-0 md:top-full md:w-275 md:h-112.5 bg-white border border-gray-200 rounded-lg shadow-xl md:py-3 z-50 transition-all duration-500 ease-out ${openDropDownId === link.id ? "opacity-0 translate-y-0 invisible md:opacity-100 md:translate-y-7 md:visible" : "opacity-0 translate-y-0 invisible pointer-events-none"}`}>
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
  )
}

export default NavMenu