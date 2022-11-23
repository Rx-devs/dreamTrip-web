import React from "react";
import ChooseHoliday from "../components/ChooseHoliday";
import ScrollBtn from "../components/ScrollBtn";
import TopBanner from "../components/TopBanner";
import Layout from "../layouts/Layout";
import Blogs from "./Blogs";
import Services from "../components/Services";

const Home = () => {
    return (
        <div className="relative z-0">
          <Layout>
            <TopBanner />
            <Services/>
            <ChooseHoliday />
            <Blogs />
            <ScrollBtn />
            </Layout>
        </div>
    );
};

export default Home ;
