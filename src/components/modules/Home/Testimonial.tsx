/* eslint-disable @typescript-eslint/no-explicit-any */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Missing type declarations for side-effect CSS import
import "swiper/css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Missing type declarations for side-effect CSS import
import "swiper/css/pagination";

import { useGetAllReviewsQuery } from "@/redux/features/review/review.api";
import { useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import Loader from "../shared/Loading";

const Testimonial = () => {
  const [more, setMore] = useState(false);
  const { data, isLoading } = useGetAllReviewsQuery(undefined);

  const testimonials = data?.data;

  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <section className="w-full mx-auto lg:mt-[80px] md:[60px] mt-[40px]   ">
      <div className="space-y-6 animate-fadeInUp">
        <h2 className="text-2xl md:text-3xl mb-[30px] text-center font-bold">
          কাস্টমার রিভিউ
        </h2>
      </div>

      <div>
        <Swiper
          slidesPerView={1} // Default mobile a 1 ta
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            // Mobile (>= 640px)
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // Tablet (>= 768px)
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            // Desktop (>= 1024px)
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {testimonials?.map((testimonial: any, index: number) => (
            <SwiperSlide
              key={index}
              className="bg-white dark:bg-black p-6 rounded-xl shadow-md break-inside-avoid  border-gray-200 dark:border-gray-800 border min-h-[250px]"
            >
              <div className="flex items-start mb-4">
                <img
                  src={
                    testimonial?.profilePhoto ||
                    "https://i.pinimg.com/736x/6f/a3/6a/6fa36aa2c367da06b2a4c8ae1cf9ee02.jpg"
                  }
                  alt={testimonial?.customerName}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <p className="font-semibold text-gray-900 dark:text-white">
                  {testimonial?.customerName}
                </p>
              </div>
              <p className="text-base text-start text-gray-700 dark:text-gray-200 leading-relaxed">
                {testimonial?.content.length > 200 ? (
                  <>
                    {more ? (
                      <>
                        {" "}
                        {testimonial?.content}{" "}
                        <p
                          onClick={() => setMore(false)}
                          className="text-blue-400 font-semibold cursor-pointer inline"
                        >
                          End More
                        </p>
                      </>
                    ) : (
                      <>
                        {testimonial?.content?.slice(0, 200)} ...{" "}
                        <p
                          onClick={() => setMore(true)}
                          className="text-blue-400 font-semibold cursor-pointer inline"
                        >
                          Read More
                        </p>
                      </>
                    )}
                  </>
                ) : (
                  testimonial?.content
                )}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
