import Hero from "../Components/Hero"
import { useProducts } from "../Hooks/useProducts"


const Home = () => {

  const testProducts = useProducts();

  if(testProducts.error) {
    return <h1>Products hata verdi</h1>
  }

  if(!testProducts.data) {
    return <h1>YÜKLENİYOR</h1>
  }

  console.log("GELEN VERİ:", testProducts.data);

  return (
    <section className="bg-[#F2F0F1]">
      <Hero />
      <div>
        <h1>DENEME</h1>
        {
          testProducts.data.map((t,i) => {
            return <h1 key={i}>{t.title}</h1>
          })
        }
      </div>
    </section>
  )
}

export default Home