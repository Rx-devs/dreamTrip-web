import placeImg from './place.jpg';
import {AiFillStar} from 'react-icons/ai';

const Place = ()=> {
	return(
			<div className="relative">
				<div className="w-full">
						<div className="place-content text-left text-white px-5 py-4 rounded-lg">
							<h3 className="text-xl">Barcelona</h3>
							<div className="flex justify-between items-center">
								<div>
									<AiFillStar className="inline-block text-base mr-2"/> 
									<span className="text-base">5.3</span>
								</div>
								<p className="text-2xl">$500</p>
							</div>	
						</div>	
						<img src={placeImg} className="rounded-lg index-0" alt=""/>
				</div>

			</div>
		)
}

export default Place;