import { lazy, Suspense } from "react";
import CustomerSay from "../components/CustomerSay";
import Experiences from "../components/Experiences";
import Preloader from "../components/Preloader";
import ScrollBtn from "../components/ScrollBtn";
import Services from "../components/Services";
import TopBanner from "../components/TopBanner";

const PopularDestinations = lazy(() =>
  import("../components/PopularDestinations")
);
const PopularBlogs = lazy(() => import("../components/PopularBlogs"));

const Home = () => {
  return (
    <div className="relative z-0">
      <TopBanner />
      <Services />
      <PopularDestinations />
      <Experiences />
      <Suspense fallback={<Preloader />}>
        <PopularBlogs />
      </Suspense>
      <CustomerSay />
      <ScrollBtn />
    </div>
  );
};

export default Home;
