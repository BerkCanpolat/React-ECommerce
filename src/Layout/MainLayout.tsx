import { Outlet } from "react-router-dom"
import Nav from "../Components/Nav"
import Footer from "../Components/Footer"
import ScrollTop from "../Components/ScrollTop"
import BackToTop from "../Components/BackToTop"

const MainLayout = () => {
  return (
    <div>
      <ScrollTop />
        <Nav />
        <main>
            <Outlet />
        </main>
        <Footer />
        <BackToTop />
    </div>
  )
}

export default MainLayout