import preloaderImg from '../assets/images/preloader/rocket.gif';

const Preloader = () => {
  return(
    <div className="flex items-center justify-center h-screen w-screen">
      <img src={preloaderImg} alt="" className="w-16 h-16"/>
    </div>
  )
};
export default Preloader;
