import React from "react";
import ChooseHoliday from "../components/ChooseHoliday";
import ScrollBtn from "../components/ScrollBtn";
import TopBanner from "../components/TopBanner";
import Layout from "../layouts/Layout";
import Blogs from "./Blogs";

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