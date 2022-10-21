import React from "react";
import SlidingBanner from "../../../components/Banner/SlidingBanner";
import ChooseHoliday from "../../../components/ChooseHoliday/ChooseHoliday";
import ScrollBtn from "../../../components/ScrollToTop/ScrollBtn";
import Footer from "../../../Shared/Footer/Footer";
import Navigation from "../../../Shared/Navigation/Navigation";
import Blogs from "../Blogs/Blogs/Blogs";
// import TopBanner from "../TopBanner/TopBanner";

const Home = () => {
    return (
        <div className="relative z-0">
            <Navigation/>
            <SlidingBanner/>
            <ChooseHoliday/>
            <Blogs />
            <ScrollBtn/>
            <Footer />
        </div>
    );
};

export default Home ;