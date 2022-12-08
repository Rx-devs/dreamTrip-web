import preloaderImg from '../assets/images/preloader/rocket.gif';
import preloaderImg2 from '../assets/images/preloader/plane.gif';

const Preloader = () => {
  return(
    <div className="flex items-center justify-center h-screen w-screen">
      <img src={preloaderImg} alt="" className="w-16 h-16"/>
    </div>
  )
};
export default Preloader;

export const Preloader2 = () => {
  return(
    <div className="flex items-center justify-center h-screen w-screen">
      <img src={preloaderImg2} alt="" className="w-16 h-16"/>
    </div>
  )
};
