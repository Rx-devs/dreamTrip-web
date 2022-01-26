import React from "react";
import Navigation from "../../../Shared/Navigation/Navigation";
import Blogs from "../Blogs/Blogs";
import TopBanner from "../TopBanner/TopBanner";
const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <TopBanner></TopBanner>
            <Blogs></Blogs>
        </div>
    );
};

export default Home ;