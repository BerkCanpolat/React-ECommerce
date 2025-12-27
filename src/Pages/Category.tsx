import { useParams } from "react-router-dom"
import { useProducts } from "../Hooks/useProducts";
import TestimonialsSkeleton from "../Components/Skeleton/TestimonialsSkeleton";
import Breadcrumb from "../Components/BreadCrumb";


const Category = () => {
    const { category } = useParams<{ category: string }>();

    const { data: categories, isLoading, error } = useProducts(1,30, category);

    if(isLoading && !categories) {
      return <TestimonialsSkeleton />;
    }

    
    if(error) {
        return (
            <div className="text-center py-10 text-red-500">
        kategorideyik babba
      </div>
    );
}
const filteredData = categories ? categories?.data.filter(myCategory => myCategory.category === category) : [];

    console.log(category)
  return (
    <section>
        <Breadcrumb />
        {
            filteredData && filteredData.length > 0 ? (
                <div className="px-4 md:px-0 md:container md:mx-auto">
                    {
                        filteredData.map((item,index) => (
                            <div key={index}>
                                <img src={item.image} alt="image" className="w-60 rounded mb-1"/>
                                <h1 className="font-kalvin font-medium mb-10">{item.title}</h1>
                            </div>
                        ))
                    }
                </div>
            ) : (
                <h1>ÜRÜN BULUNAMADI</h1>
            )
        }
    </section>
  )
}

export default Category