import { IMAGES } from "../Constants/images";
import { useCategories } from "../Hooks/useProducts";
import HomeCategoryMap from "./HomeCategoryMap";

const HomeCategory = () => {
    const { data: category, isLoading, error } = useCategories();

    console.log("DATAM", category);

  if(error) {
    return <h1>HATA..!</h1>
  }

  if(isLoading && !category) {
    return <h1>DATA GELMEDİ</h1>
  }


  return (
    <section className="bg-[#F0F0F0] px-4 md:px-0 md:container md:mx-auto md:mt-20 mt-12 pt-10 pb-10 md:pt-15 md:pb-15 rounded-4xl">
            <h1 className="text-5xl font-kalvin font-bold uppercase text-center tracking-tighter">browse by dress style</h1>
            <div className="md:max-w-6xl md:mx-auto mt-7 md:mt-20 grid grid-cols-1 md:grid-cols-6 gap-4.5 md:gap-6">
        {
            category?.map((c,i) => {
                const colSpan = i === 1 || i === 2 ? "col-span-2 md:col-span-4" : "col-span-2 md:col-span-2";
                return (
                <HomeCategoryMap c={c} i={i} colSpan={colSpan} key={i}/>
                ) 
            })
        }
        <div className="col-span-2 h-60 bg-white rounded-2xl flex items-center justify-center group">
            <img src={IMAGES.LOGO} alt="logo" className="w-50 transition-all duration-300 group-hover:scale-110"/>
        </div>
            </div>
    </section>
  )
}

export default HomeCategory