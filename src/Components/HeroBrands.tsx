interface HeroBrandsProps {
    title: string
    style?: string
}

const HeroBrands = ({ title, style }: HeroBrandsProps) => {
  return (
    <div className={`${style} text-white text-3xl md:text-5xl`}>
        {title}
    </div>
  )
}

export default HeroBrands