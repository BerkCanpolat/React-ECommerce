interface HeroTextProps {
    title: string;
    description: string;
    style?: string
}

const HeroText = ({ title, description, style }:HeroTextProps )=> {
  return (
    <div>
      <h1 className={`font-semibold text-2xl md:text-5xl ${style}`}>{title}</h1>
      <p className="text-gray-800 font-extralight mt-1 text-sm md:text-[15px]">{description}</p>
    </div>
  );
};

export default HeroText;
