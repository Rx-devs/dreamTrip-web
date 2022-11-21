import React from "react";
import { ParallaxBanner } from 'react-scroll-parallax';
import bgImg from '../assets/images/banner/bg.jpg';
import SearchTrip from "./SearchTrip";
 
const TopBanner = () => {
  return (
    <div className="relative mb-12">
      <ParallaxBanner
        layers={[
          {
            image: `${bgImg}`,
            speed: -15,
            scale: [1, 1.1],
            opacity: [1, 1],
            expanded: false,
          },
          {
            speed: 15,
            opacity: [1, 1],
            children: (
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-4xl md:text-6xl lg:text-8xl text-white font-thin">Explore and travel!</h1>
              </div>
            ),
          },
        ]}
        className="aspect-[2/1] w-screen h-screen"
      />
      <SearchTrip />
    </div>
  );
};

export default TopBanner ;