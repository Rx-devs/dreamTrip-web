import { AiFillStar } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Destination = ({destination}) => {
	const { destination_id, destination_name,images, destination_rating, travel_cost } = destination;

	return (
		<div className="relative overflow-hidden rounded-lg h-80">
			<div className="w-full h-full">
				<div className="place-content text-left text-white px-5 py-4 rounded-lg z-20">
					<Link className="cursor-pointer" to={`/destinationDetails/${destination_id}`}>
					<h3 className="text-xl">{destination_name}</h3>
					</Link>
					<div className="flex justify-between items-center">
						<div>
							<AiFillStar className="inline-block text-base mr-2" />
							<span className="text-base">{destination_rating}</span>
						</div>
						<p className="text-2xl">${travel_cost}</p>
					</div>
				</div>
				<div className="transition ease-in-out delay-100 hover:scale-125 duration-700 z-10 w-full h-full">
					<LazyLoadImage
            src={images.thumbnail_url}
            className="object-cover w-full h-full"
            alt="Destination thumbnail"
            effect="blur"
          />
				</div>
			</div>

		</div>
	);
};

export default Destination;
