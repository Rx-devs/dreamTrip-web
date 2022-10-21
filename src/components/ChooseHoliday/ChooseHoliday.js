import img1 from '../../assets/images/places/place.jpg';
import Place from '../Place/Place';

const places = [
	{
		place_name:'Spain',
		place_value: 700,
		place_thumbnail: img1,
		place_rating: 5,

	},
		{
		place_name:'Spain',
		place_value: 700,
		place_thumbnail: img1,
		place_rating: 5,

	},
		{
		place_name:'Spain',
		place_value: 700,
		place_thumbnail: img1,
		place_rating: 5,

	},
		{
		place_name:'Spain',
		place_value: 700,
		place_thumbnail: img1,
		place_rating: 5,

	},
]

const ChooseHoliday = () =>{
	return (
		<div className="py-10 container mx-auto">
			<div className="flex flex-col gap-4 w-1/2 mx-auto">
				<span className="subtitle text-xl">Choose Your</span>
				<p className="text-4xl font-semibold">Perfect Holiday</p>
				<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula
					eget dolor. Aenean massa. Cum sociis the</p>

			</div>
			<div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{
					places.map((place, index) => (
						<Place key={index} place={place} />
					))
				}
			</div>
		</div>
	);
}


export default ChooseHoliday;