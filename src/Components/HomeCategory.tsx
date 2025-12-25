import { IMAGES } from "../Constants/images";
import { useCategories } from "../Hooks/useProducts";
import HomeCategoryMap from "./HomeCategoryMap";
import HomeCategorySkeleton from "./Skeleton/HomeCategorySkeleton";

interface HomeCategoryProps {
    style: string,
    styleTwo: string
}

const HomeCategory = ({ style, styleTwo }: HomeCategoryProps) => {
    const { data: category, isLoading, error } = useCategories();

    if(isLoading && !category) {
      return <HomeCategorySkeleton styleTwo={styleTwo}/>
    }

  if(error) {
    return (
      <div className="text-center py-10 text-red-500">
        Kategoriler yüklenirken bir hata oluştu.
      </div>
    );
  }

  if (!isLoading && (!category || category.length === 0)) {
    return <div className="text-center py-20 italic text-gray-400">Gösterilecek kategori bulunamadı.</div>;
  }


  return (
    <section className={`px-4 md:px-0 md:container md:mx-auto pt-10 pb-10 md:pt-15 md:pb-15 rounded-4xl ${styleTwo}`}>
            <h1 className="text-5xl font-kalvin font-bold uppercase text-center tracking-tighter">browse by dress style</h1>
            <div className={`md:max-w-6xl md:mx-auto mt-7 grid grid-cols-1 md:grid-cols-6 gap-4.5 md:gap-6 ${style}`}>
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