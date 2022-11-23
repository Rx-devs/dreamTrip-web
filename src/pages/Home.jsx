import React from "react";
import Destinations from "../components/Destinations";
import ScrollBtn from "../components/ScrollBtn";
import TopBanner from "../components/TopBanner";
import Layout from "../layouts/Layout";
import Blogs from "./Blogs";
import Services from "../components/Services";
import Experiences from "../components/Experiences";
import CustomerSay from "../components/CustomerSay"

const Home = () => {
    return (
        <div className="relative z-0">
          <Layout>
            <TopBanner />
            <Services/>
            <Destinations />
            <Experiences/>
            <Blogs />
            <CustomerSay/>
            <ScrollBtn />
          </Layout>
        </div>
    );
};

export default Home ;
