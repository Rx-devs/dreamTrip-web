import { BsPinFill } from 'react-icons/bs';
import { MdDateRange, MdOutlinePlace } from 'react-icons/md';

const SearchTrip = () => {
	return (
		<div className="absolute bottom-0 translate-y-1/2 bg-transparent w-full">
			<div className="w-3/4 mx-auto">
				<form className="grid grid-cols-[1fr_1fr_1fr_180px] items-center bg-white" action="">
					<div className="py-5 flex items-center justify-center gap-2">
						<MdOutlinePlace className="w-6 h-6 color-dark-gray" />
						<input className="outline-none color-dark-gray" type="text" id="placeName" name="placeName" placeholder="Where to?" />
					</div>
					<div className="py-5 flex items-center justify-center gap-2 relative">
						<MdDateRange className="absolute left-0 color-dark-gray w-5 h-5" />
						<select className="outline-none appearance-none color-dark-gray px-6 py-2 w-full cursor-pointer" name="month" id="month">
							<option className="" value="">
								Month
							</option>
							<option value="january">January</option>
							<option value="february">February</option>
							<option value="march">March</option>
							<option value="april">April</option>
						</select>
					</div>
					<div className="py-5 flex items-center gap-2 relative">
						<BsPinFill className="absolute left-0 color-dark-gray w-5 h-5" />
						<select className="outline-none appearance-none color-dark-gray w-full px-6 py-2 cursor-pointer" name="travel" id="travel">
							<option className="" value="">
								Travel Type
							</option>
							<option value="saab">Latest</option>
							<option value="mercedes">Popular</option>
							<option value="audi">Any</option>
						</select>
					</div>
					<input className="w-full py-7 bg-color-main text-white outline-none cursor-pointer" type="submit" value="Find Now" />
				</form>
			</div>
		</div>
	);
};

export default SearchTrip;