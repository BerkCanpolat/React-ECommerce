import Hero from "../Components/Hero";
import HomeCategory from "../Components/HomeCategory";
import NewArrivals from "../Components/NewArrivals";
import Testimonials from "../Components/Testimonials";

const Home = () => {

  return (
    <section>
      <Hero />
      <NewArrivals/>
      <HomeCategory style="md:mt-20" styleTwo="md:mt-20 mt-12 bg-[#F0F0F0]"/>
      <Testimonials />
    </section>
  );
};

export default Home;
