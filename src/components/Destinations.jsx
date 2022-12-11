import img1 from '../assets/images/holidays/holiday_1.jpg';
import img2 from '../assets/images/holidays/holiday_2.jpg';
import img3 from '../assets/images/holidays/holiday_3.jpg';
import img4 from '../assets/images/holidays/holiday_4.jpg';
import Place from './Place';


const Destinations = () => {
	return (
		<div className="py-12 container mx-auto text-center">
			<div className="flex flex-col gap-4 w-3/4 lg:w-1/2 mx-auto">
				<span className="typography-caption text-xl">Choose Your</span>
				<p className="text-4xl md:text-5xl font-semibold typography-heading">Holiday Destination</p>
				<p>Explore top desntinations to choose your next travel destination. We keep traveling and searching for new things to do, we are focused on travel.  </p>
			</div>
			<div className="py-6 px-5 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
				{
					places.map((place, index) => (
						<Place key={index} place={place} />
					))
				}
			</div>
		</div>
	);
};

export default Destinations;

const places = [
	{
		id: 1,
		place_name:'Spain',
		place_value: 700,
		place_thumbnail: img1,
		place_rating: 5,
	},
		{
			id: 2,
		place_name:'Spain',
		place_value: 700,
		place_thumbnail: img2,
		place_rating: 5,
	},
		{
			id: 3,
		place_name:'Spain',
		place_value: 700,
		place_thumbnail: img3,
		place_rating: 5,
	},
		{
			id: 4,
		place_name:'Spain',
		place_value: 700,
		place_thumbnail: img4,
		place_rating: 5,
	}
]
