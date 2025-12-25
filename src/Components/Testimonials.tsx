import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useRef } from "react";
import { FaStar } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { useReview } from "../Hooks/useProducts";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import TestimonialsSkeleton from "./Skeleton/TestimonialsSkeleton";

const Testimonials = () => {
  const { data: testimonial = [], isLoading, error } = useReview();

  const swiperRef = useRef<any>(null);

  if (isLoading && testimonial.length === 0) {
    return <TestimonialsSkeleton />;
  }

  if(error) {
    return (
      <div className="text-center py-10 text-red-500">
        Kullanıcı yorumları yüklenirken bir hata oluştu.
      </div>
    );
  }

  if (testimonial.length === 0) return null;

  return (
    <div className='overflow-hidden my-25'>
            <div className='flex items-center justify-between px-4 md:px-0 container mx-auto mb-8'>
                <h1 className='uppercase text-3xl md:text-5xl font-extrabold font-kalvin'>our happy customers</h1>
                <div className='flex items-center gap-3 text-2xl'>
                    <button className='cursor-pointer p-2' onClick={() => swiperRef.current?.slidePrev()}><GrLinkPrevious /></button>
                    <button className='cursor-pointer p-2' onClick={() => swiperRef.current?.slideNext()}><GrLinkNext /></button>
                </div>
            </div>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
                spaceBetween={20}
                slidesPerView={1}
                centeredSlides={true}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        centeredSlides: false,
                    },
                    1024: {
                        slidesPerView: 3.5,
                        spaceBetween: 30,
                    },
                }}
                className="mySwiper px-10! md:px-20! pb-12!"
            >
                {testimonial.map((item) => (
                    <SwiperSlide key={item._id}>
                        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 h-72 flex flex-col transition-all duration-300">
                            <div className="flex items-center gap-0.5 mb-3 text-amber-400">
                                {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                            </div>
                            <div className='flex items-center gap-2 mb-4'>
                                <h4 className="font-bold">User {item._id}</h4>
                                <FaCircleCheck className='text-green-500'/>
                            </div>
                            <p className="text-gray-500 line-clamp-4">{item.comment}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
  );
};

export default Testimonials;
