import React from "react";
import Footer from "../../../Shared/Footer/Footer";
import Navigation from "../../../Shared/Navigation/Navigation";
import Blogs from "../Blogs/Blogs/Blogs";
import TopBanner from "../TopBanner/TopBanner";
const Home = () => {
    return (
        <div class="relative z-0">
            <Navigation></Navigation>
            <TopBanner></TopBanner>
            <Blogs></Blogs>
            <Footer></Footer>
        </div>
    );
};

export default Home ;