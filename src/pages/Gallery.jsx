import { NavLink } from 'react-router-dom';
import img1 from '../assets/images/bannerSlider/img1.jpg';
import img2 from '../assets/images/bannerSlider/img2.jpg';
import img3 from '../assets/images/bannerSlider/img3.jpg';
import img4 from '../assets/images/bannerSlider/img4.jpg';
import styles from '../styles/gallery.module.css';

const sliders = [
	{
		img: img1,
		text: 'Holiday on Hills!'
	},
	{
		img: img2,
		text: 'Holiday On Sea Beach!'
	},
	{
		img: img3,
		text: 'Holiday On Mountains!'
	},
	{
		img: img4,
		text: 'Holiday On Forest!'
	},
]

const Gallery = () => {
	return (
		<div className="h-screen relative">
			<div className='absolute top-5 z-10 w-full text-center md:text-start md:pl-6 color-main'>
				<NavLink to="/home" className="text-3xl md:text-4xl font-semibold">DreamTrip</NavLink>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-fit lg:h-full overflow-hidden">
				{
					sliders.map((slide, index) => (

						<div key={index} className={styles["slider-box"]}>
							<div className={styles["slider-text"]}>
								<p className="text-3xl md:text-2xl font-semibold text-center">
									<span className="block my-2 text-xl md:text-base font-normal">Relaxing</span>
									{slide.text}
								</p>
							</div>
							<img src={slide.img} alt="Holiday Trips" />
						</div>

					))
				}
			</div>
		</div>
	);
};

export default Gallery;
