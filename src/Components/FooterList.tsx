interface FooterListProps {
    header: string,
    links: string[],
}

const FooterList = ({ header,links }: FooterListProps) => {
  return (
    <div>
      <h1 className="uppercase font-kalvin font-semibold mb-4.5 md:mb-5.5 tracking-[3px] text-sm md:text-lg">{header}</h1>
      <ul>
        {
            links.map((link,index) => (
                <li key={index} className="capitalize mb-4 md:mb-5.5 text-gray-600 cursor-pointer hover:text-black text-sm md:text-lg">
                    {link}
                </li>
            ))
        }
      </ul>
    </div>
  );
};

export default FooterList;
