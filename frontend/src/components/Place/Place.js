import { AiFillStar } from 'react-icons/ai';

const Place = (props) => {
	const { place_name, place_value, place_thumbnail, place_rating }  = props.place;

	return (
		<div className="relative">
			<div className="w-full">
				<div className="place-content text-left text-white px-5 py-4 rounded-lg">
					<h3 className="text-xl">{place_name}</h3>
					<div className="flex justify-between items-center">
						<div>
							<AiFillStar className="inline-block text-base mr-2" />
							<span className="text-base">{place_rating}</span>
						</div>
						<p className="text-2xl">${place_value}</p>
					</div>
				</div>
				<img src={place_thumbnail} className="rounded-lg object-cover w-full" alt="" />
			</div>

		</div>
	);
}

export default Place;