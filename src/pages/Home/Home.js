import React from "react";
import ChooseHoliday from "../../components/ChooseHoliday/ChooseHoliday";
import ScrollBtn from "../../components/ScrollToTop/ScrollBtn";
import TopBanner from "../../components/TopBanner/TopBanner";
import Layout from "../../layouts/Layout";
import Blogs from "../Blogs/Blogs/Blogs";

const Home = () => {
    return (
        <div className="relative z-0">
            <Layout>
            <TopBanner />
            <ChooseHoliday />
            <Blogs />
            <ScrollBtn />
            </Layout>
        </div>
    );
};

export default Home ;