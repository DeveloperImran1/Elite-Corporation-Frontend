import Faq from "@/components/modules/Home/Faq";
import FeaturesSection from "@/components/modules/Home/FeaturedSection";
import HeroSection from "@/components/modules/Home/HeroSection";
import ProductBenefit from "@/components/modules/Home/ProductBenifit";
import Testimonial from "@/components/modules/Home/Testimonial";
import Upadan from "@/components/modules/Home/Upadan";
import OrderNow from "./OrderNow";

const HomePage = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <ProductBenefit></ProductBenefit>

      {/* <VideoSection></VideoSection> */}
      <Upadan></Upadan>
      <FeaturesSection></FeaturesSection>
      <OrderNow></OrderNow>
      <Testimonial></Testimonial>
      <Faq></Faq>
    </div>
  );
};

export default HomePage;
