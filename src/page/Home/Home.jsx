import CommonService from "../../component/CommonService/CommonService";
import FeatureSection from "../../component/FeatureSection/FeatureSection";
import Footer from "../../component/Footer/Footer";
import HomeSlider from "../../component/HomeSlider/HomeSlider";
import MainNavigation from "../../component/MainNavigation/MainNavigation";
import OurServices from "../../component/OurServices/OurServices";
import PackegPlan from "../../component/PackegPlan/PackegPlan";
import Testimonial from "../../component/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <MainNavigation />
      <HomeSlider />
      <FeatureSection />
      <PackegPlan />
      <CommonService />
      <OurServices />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Home;
