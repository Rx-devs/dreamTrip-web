import { AiFillStar } from 'react-icons/ai';

const Place = (props) => {
	const { place_name, place_value, place_thumbnail, place_rating } = props.place;

	return (
		<div className="relative overflow-hidden rounded-md">
			<div className="w-full">
				<div className="place-content text-left text-white px-5 py-4 rounded-lg z-20">
					<h3 className="text-xl">{place_name}</h3>
					<div className="flex justify-between items-center">
						<div>
							<AiFillStar className="inline-block text-base mr-2" />
							<span className="text-base">{place_rating}</span>
						</div>
						<p className="text-2xl">${place_value}</p>
					</div>
				</div>
				<div className="transition ease-in-out delay-100 hover:scale-125 duration-700 z-10">
					<img src={place_thumbnail} className="object-cover w-full" alt="place thumbnail" />
				</div>
				
			</div>

		</div>
	);
};

export default Place;