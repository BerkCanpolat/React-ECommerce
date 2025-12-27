import { IMAGES } from "../Constants/images"
import { FaTwitter,FaFacebookF,FaGithub,FaCcPaypal } from "react-icons/fa";
import { FaInstagram,FaApplePay,FaGooglePay } from "react-icons/fa6";
import FooterList from "./FooterList";
import { FOOTER_LINKS } from "../Constants/Navigation";
import { TfiEmail } from "react-icons/tfi";
import { SiVisa } from "react-icons/si";
import { BiLogoMastercard } from "react-icons/bi";






const Footer = () => {
  return (
    <footer className="relative bg-[#F0F0F0] pt-35 pb-10 mt-50">
      <div className="absolute -top-30 md:-top-22 left-1/2 -translate-x-1/2 bg-black w-full container mx-auto rounded-2xl flex items-center justify-center md:justify-between flex-wrap px-4 md:px-14 h-80 md:h-45">
      <h1 className="text-white uppercase text-3xl max-w-75 md:text-5xl font-extrabold font-kalvin md:max-w-175">stay upto date about our latest offers</h1>
      <div className="flex flex-col gap-3.5">
        <div className="flex items-center gap-2.5 bg-white pl-5 py-3.5 rounded-full">
          <TfiEmail className="bg-white"/>
        <input type="text" className="bg-white outline-none border-none" placeholder="Enter your email address"/>
        </div>
        <button className="bg-white px-15 py-3.5 rounded-full">Subscribe to Newsletter</button>
      </div>
      </div>
      <div className="flex flex-col md:flex-row items-start px-4 md:px-0 container mx-auto gap-8 md:gap-40">
        <div className="mt-25 md:mt-0">
          <img src={IMAGES.LOGO} alt="logo" className="w-45 mb-3.5 md:mb-5.5"/>
          <p className="text-gray-500 md:leading-6 max-w-98.5 text-sm md:text-[15px] mb-5 md:mb-10">We have clothes that suits your style and which you're proud to wear. From women to men.</p>
          <div className="flex items-center gap-5">
          <FaTwitter className="bg-white text-black w-8.5 h-8.5 p-1 md:w-10 md:h-10 md:p-2 rounded-full border border-gray-400 cursor-pointer transtion-all duration-300 hover:bg-black hover:text-white hover:border-white"/>
          <FaFacebookF className="bg-black text-white w-8.5 h-8.5 p-1 md:w-10 md:h-10 md:p-2 rounded-full border border-black cursor-pointer transtion-all duration-300 hover:bg-white hover:text-black hover:border-gray-400"/>
          <FaInstagram className="bg-white text-black w-8.5 h-8.5 p-1 md:w-10 md:h-10 md:p-2 rounded-full border border-gray-400 cursor-pointer transtion-all duration-300 hover:bg-black hover:text-white hover:border-white"/>
          <FaGithub className="bg-white text-black w-8.5 h-8.5 p-1 md:w-10 md:h-10 md:p-2 rounded-full border border-gray-400 cursor-pointer transtion-all duration-300 hover:bg-black hover:text-white hover:border-white"/>
          </div>
        </div>
        <div className="grid grid-cols-2 md:flex md:flex-row md:items-center md:justify-between md:w-full">
          {
            FOOTER_LINKS.map((item,index) => (
              <FooterList header={item.header} links={item.links} key={index}/>
            ))  
          }
        </div>
      </div>
      <div className="w-full bg-gray-300 h-px rounded-full container mx-auto"/>
      <div className="flex flex-col md:flex-row gap-5 md:gap-0 items-center justify-between container mx-auto pt-5">
        <p className="text-sm text-gray-500">Shop.co &copy; 2025-2026, All Rights Reserved</p>
        <div className="flex items-center gap-5">
          <SiVisa className="w-15 h-9 p-0.5 rounded-md bg-white text-blue-900 hover:bg-black hover:text-white transition-all duration-300"/>
          <BiLogoMastercard className="w-15 h-9 p-0.5 rounded-md bg-white text-red-500 hover:bg-black hover:text-white transition-all duration-300"/>
          <FaCcPaypal className="w-15 h-9 p-0.5 rounded-md bg-white text-blue-900 hover:bg-black hover:text-white transition-all duration-300"/>
          <FaApplePay className="w-15 h-9 p-0.5 rounded-md bg-white text-black hover:bg-black hover:text-white transition-all duration-300"/>
          <FaGooglePay className="w-15 h-9 p-0.5 rounded-md bg-white text-black hover:bg-black hover:text-white transition-all duration-300"/>
          </div>
      </div>
    </footer>
  )
}

export default Footer