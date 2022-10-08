import img1 from '../../assets/images/banner slider/img1.jpg';
import img2 from '../../assets/images/banner slider/img2.jpg';
import img3 from '../../assets/images/banner slider/img3.jpg';
import img4 from '../../assets/images/banner slider/img4.jpg';

const sliders = [
	{
		img: img1,
		text: 'Holiday!'
	},
		{
		img: img2,
		text: 'Holiday!'
	},
		{
		img: img3,
		text: 'Holiday!'
	},
		{
		img: img4,
		text: 'Holiday!'
	},
]

const SlidingBanner = () =>{
	return (
		<div className="h-screen">
			<div className="grid grid-cols-4 h-full overflow-hidden">
				{
					sliders.map((slide, index) => (

						<div key={index} className="slider-box">
							<div className="slider-text">
								<p className="text-4xl font-semibold">
									<span className="block my-2 text-base font-normal">Relaxing</span>
									{slide.text}
								</p>
							</div>
							<img src={slide.img} alt="" />
						</div>

					))
				}
			</div>
				
		</div>
	);
}

export default SlidingBanner;