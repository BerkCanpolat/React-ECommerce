import { brandContainerVariants, brandItemVariants, heroImageVariants, heroItemVariants, heroVariants } from "../Constants/Animation"
import { IMAGES } from "../Constants/images"
import HeroBorder from "./HeroBorder"
import HeroBrands from "./HeroBrands"
import HeroText from "./HeroText"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <motion.section className="h-auto md:h-auto pt-8.5 md:pt-5 bg-[#F2F0F1]"
    variants={heroVariants}
    initial="initial"
    animate="animate">
        <div className="flex items-center justify-center flex-wrap px-5 md:px-0 md:container md:m-auto">
        {/* section one */}
        <div className="flex-1">
            <motion.h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-10 md:leading-17" variants={heroItemVariants}>FIND CLOTHES <br /> that matches <br /> your style</motion.h1>
            <motion.p className="text-gray-800 font-extralight my-7.5 text-sm md:text-[16px] max-w-92.5 md:max-w-140" variants={heroItemVariants}>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</motion.p>
            <motion.button className="w-90 md:w-65 py-4 bg-black text-white rounded-4xl font-medium cursor-pointer mb-8 md:mb-15 transition-all duration-300 hover:-translate-y-1" variants={heroItemVariants}>Shop Now</motion.button>

            <motion.div className="flex items-center flex-wrap justify-center md:justify-start" variants={heroItemVariants}>
                <HeroText title={"200+"} description="International Brands"/>
                <HeroBorder />
                <HeroText title={"2,000+"} description="High-Quality Products"/>
                <HeroBorder style="hidden md:block"/>
                <HeroText title={"30,000+"} description="Happy Customers" style="mt-5 md:mt-0"/>
            </motion.div>
        </div>

        {/* Section two */}
        <motion.div className="relative" variants={heroImageVariants}>
            <img src={IMAGES.MAIN_BG} alt="main logo" className="w-72.5 md:w-129.5"/>
            <motion.img
            animate={{y:[0, -10, 0]}}
            transition={{repeat: Infinity, duration: 3}}
             src={IMAGES.VECTOR_ONE} alt="Vector one" className="absolute top-5 right-0 md:top-15 md:right-3 w-20 md:w-25"/>
            <motion.img 
            animate={{y:[0, -10, 0]}}
            transition={{repeat: Infinity, duration: 2}}
            src={IMAGES.VECTOR_TWO} alt="Vector two" className="absolute top-28 md:top-75"/>
        </motion.div>
        </div>

        {/* BRANDS */}
        <motion.div className="flex flex-wrap items-center justify-center md:justify-between gap-5 md:gap-0 bg-black py-7 md:py-12.5 px-5 md:px-12.5"
        variants={brandContainerVariants}
        initial="initial"
        animate="animate">
            <motion.div
            variants={brandItemVariants}>
            <HeroBrands title="versace" style="uppercase font-zara font-bold tracking-tight"/>
            </motion.div>
            <motion.div
            variants={brandItemVariants}>
            <HeroBrands title="zara" style="uppercase font-zara -tracking-[7px] font-medium"/>
            </motion.div>
            <motion.div
            variants={brandItemVariants}>
            <HeroBrands title="gucci" style="uppercase font-gucci font-medium"/>
            </motion.div>
            <motion.div
            variants={brandItemVariants}>
            <HeroBrands title="prada" style="uppercase font-prada font-medium"/>
            </motion.div>

            <motion.div
            variants={brandItemVariants}>
            <HeroBrands title="calvin klein" style="capitalize font-kalvin font-light"/>
            </motion.div>
        </motion.div>

    </motion.section>
  )
}

export default Hero