import React from "react";
import ScrollBtn from "../../../components/ScrollToTop/ScrollBtn";
import SlidingBanner from "../../../components/Banner/SlidingBanner";
import Footer from "../../../Shared/Footer/Footer";
import Navigation from "../../../Shared/Navigation/Navigation";
import Blogs from "../Blogs/Blogs/Blogs";
import TopBanner from "../TopBanner/TopBanner";
const Home = () => {
    return (
        <div className="relative z-0">
            <Navigation/>
            <SlidingBanner/>
            <Blogs />
            <ScrollBtn/>
            <Footer />
        </div>
    );
};

export default Home ;