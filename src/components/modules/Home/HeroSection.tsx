import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

export default function HeroSection() {
  const banners = [
    "https://res.cloudinary.com/dqdircc96/image/upload/v1747059755/cwpp7ufqldm9dg7c9pol.png",
    "https://res.cloudinary.com/dqdircc96/image/upload/v1747059810/w81rrijhdwmwlvyebyuk.png",
    "https://res.cloudinary.com/dqdircc96/image/upload/v1747059851/jpsz51jpmujmvkoc88fy.jpg",
    "https://res.cloudinary.com/dqdircc96/image/upload/v1747059892/a0subrtpnsognibwy1yv.jpg",
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
