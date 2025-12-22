import { IMAGES } from "../Constants/images"
import HeroBorder from "./HeroBorder"
import HeroBrands from "./HeroBrands"
import HeroText from "./HeroText"

const Hero = () => {
  return (
    <section className="h-auto md:h-auto pt-8.5 md:pt-5">
        <div className="flex items-center justify-center flex-wrap px-5 md:px-0 md:container md:m-auto">
        {/* section one */}
        <div className="flex-1">
            <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tight leading-10 md:leading-17">FIND CLOTHES <br /> that matches <br /> your style</h1>
            <p className="text-gray-800 font-extralight my-7.5 text-sm md:text-[16px] max-w-92.5 md:max-w-140">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
            <button className="w-90 md:w-65 py-4 bg-black text-white rounded-4xl font-medium cursor-pointer mb-8 md:mb-15 transition-all duration-300 hover:-translate-y-1">Shop Now</button>

            <div className="flex items-center flex-wrap justify-center md:justify-start">
                <HeroText title={"200+"} description="International Brands"/>
                <HeroBorder />
                <HeroText title={"2,000+"} description="High-Quality Products"/>
                <HeroBorder style="hidden md:block"/>
                <HeroText title={"30,000+"} description="Happy Customers" style="mt-5 md:mt-0"/>
            </div>
        </div>

        {/* Section two */}
        <div className="relative">
            <img src={IMAGES.MAIN_BG} alt="main logo" className="w-72.5 md:w-129.5"/>
            <img src={IMAGES.VECTOR_ONE} alt="Vector one" className="absolute top-5 right-0 md:top-15 md:right-3 w-20 md:w-25"/>
            <img src={IMAGES.VECTOR_TWO} alt="Vector two" className="absolute top-28 md:top-75"/>
        </div>
        </div>

        {/* BRANDS */}
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-5 md:gap-0 bg-black py-7 md:py-12.5 px-5 md:px-15">
            <HeroBrands title="versace" style="uppercase font-zara font-bold tracking-tight"/>
            <HeroBrands title="zara" style="uppercase font-zara -tracking-[7px] font-medium"/>
            <HeroBrands title="gucci" style="uppercase font-gucci font-medium"/>
            <HeroBrands title="prada" style="uppercase font-prada font-medium"/>
            <HeroBrands title="calvin klein" style="capitalize font-kalvin font-light"/>
        </div>

    </section>
  )
}

export default Hero