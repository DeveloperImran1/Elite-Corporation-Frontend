import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Missing type declarations for side-effect CSS import
import "swiper/css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Missing type declarations for side-effect CSS import
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

export default function HeroSection() {
  const banners = [
    "https://i.postimg.cc/hPMNs5kx/2.png",
    "https://i.postimg.cc/639s6xnq/workers.png",
    "https://i.postimg.cc/5NpDgRhr/3.png",
  ];
  return (
    <section className="">
      <Swiper
        //  spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        //  pagination={{
        //    clickable: true,
        //  }}
        //  navigation={true}
        modules={[Autoplay]}
        className="mySwiper h-[150px] md:h-[340px] lg:h-[430px] w-full  "
      >
        {banners?.map((banner, index) => (
          <SwiperSlide key={index} className=" rounded-md  ">
            <img
              className="h-full w-full hidden md:block"
              src={banner}
              alt="Banner"
            ></img>
            <img
              className="h-full w-full block md:hidden"
              src={banner}
              alt="Banner"
            ></img>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
