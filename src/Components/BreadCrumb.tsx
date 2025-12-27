import { Link, useLocation } from "react-router-dom";
import { HiChevronRight } from "react-icons/hi";

const Breadcrumb = () => {
  const location = useLocation();

  const fromName = location.state?.fromName || "Home";
  const fromPath = location.state?.fromPath || "/";

  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="flex items-center space-x-2 text-gray-500 text-sm mb-6 container mx-auto px-4 md:px-0 py-5 font-kalvin">
      <Link 
        to={fromPath} 
        className="hover:text-black transition-colors capitalize font-medium"
      >
        {fromName}
      </Link>

      {pathnames.map((name, index) => {
        // const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return (
          <div key={name} className="flex items-center space-x-2">
            <HiChevronRight className="text-gray-400 text-lg" />
            
            {isLast ? (
              <span className="capitalize text-black font-bold">
                {decodeURIComponent(name)}
              </span>
            ) : (
              <h1 
                className="capitalize hover:text-black transition-colors"
              >
                {decodeURIComponent(name)}
              </h1>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;