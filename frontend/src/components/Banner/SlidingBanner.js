import img1 from './banner/img1.jpg';
import img2 from './banner/img2.jpg';

const sliders = [
	{
		img: img1
	},
		{
		img: img2
	},
		{
		img: img1
	},
		{
		img: img2
	},
]

const SlidingBanner = () =>{
	return(
			<div className="h-screen">
				<div className="flex h-full">
				{
					sliders.map((slide,index) => (

					<div key={index} className="slider-box">
						<img src={slide.img} alt=""/>
					</div>

					))
				}
				</div>
				
			</div>
	)
}

export default SlidingBanner;