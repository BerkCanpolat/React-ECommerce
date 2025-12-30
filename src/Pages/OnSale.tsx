import { useState } from "react";
import Breadcrumb from "../Components/BreadCrumb";
import OnSaleCategoryFilter from "../Components/OnSaleCategoryFilter";
import OnSaleProduct from "../Components/OnSaleProduct";

const OnSale = () => {
  const DEFAULT_MAX_PRICE = 99999;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [maxPrice, setMaxPrice] = useState<number>(DEFAULT_MAX_PRICE);

  return (
    <section>
      <Breadcrumb />
      <div className="flex flex-col items-center md:flex-row md:items-start justify-center gap-10 px-4 md:px-0 container mx-auto ">
        <OnSaleCategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />
        <OnSaleProduct category={selectedCategory} maxPrice={maxPrice} />
      </div>
    </section>
  );
};

export default OnSale;
