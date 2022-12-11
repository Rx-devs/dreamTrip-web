import { ParallaxBanner } from 'react-scroll-parallax';
import bgImg from '../assets/images/banner/bg.jpg';
import SearchTrip from "./SearchTrip";

const TopBanner = () => {
  return (
    <div className="relative mb-16">
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
              <div className="absolute inset-0 flex h-5/6	md:h-auto items-center justify-center px-4 md:px-0 text-center">
                <h1 className="text-5xl md:text-6xl lg:text-8xl text-white font-semibold lg:font-normal typography-heading">Explore and travel!</h1>
              </div>
            ),
          },
        ]}
        className="aspect-[2/1] w-screen banner-styles"
      />
      <SearchTrip />
    </div>
  );
};

export default TopBanner ;
