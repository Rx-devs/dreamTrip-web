import { AiFillStar } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Place = (props) => {
	const { place_name, place_value, place_thumbnail, place_rating,id } = props.place;

	return (
		<div className="relative overflow-hidden rounded-lg h-80">
			<div className="w-full h-full">
				<div className="place-content text-left text-white px-5 py-4 rounded-lg z-20">
					<Link className="cursor-pointer" to={`/destinationDetails/${id}`}>
					<h3 className="text-xl">{place_name}</h3>
					</Link>
					<div className="flex justify-between items-center">
						<div>
							<AiFillStar className="inline-block text-base mr-2" />
							<span className="text-base">{place_rating}</span>
						</div>
						<p className="text-2xl">${place_value}</p>
					</div>
				</div>
				<div className="transition ease-in-out delay-100 hover:scale-125 duration-700 z-10 h-full">
					<img src={place_thumbnail} className="object-cover w-full h-full" alt="place thumbnail" />
				</div>
			</div>

		</div>
	);
};

export default Place;
