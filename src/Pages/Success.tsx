import Lottie from "lottie-react"
import { IMAGES } from "../Constants/images"

const Success = () => {
  return (
    <section className="flex flex-col items-center justify-center">
        <Lottie animationData={IMAGES.SUCCESS} className="w-75 md:w-100"/>
        <h1 className="font-kalvin font-bold text-4xl">Your order has been successfully received!</h1>
    </section>
  )
}

export default Success