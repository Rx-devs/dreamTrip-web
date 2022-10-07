import Place from '../Place/Place';


const ChooseHoliday = () =>{
	return(
			<div className="py-10 container mx-auto">
				<div className="flex flex-col gap-4 w-1/2 mx-auto">
					<span className="subtitle text-xl">Choose Your</span>
					<p className="text-4xl font-semibold">Perfect Holiday</p>
					<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor. Aenean massa. Cum sociis the</p>

				</div>
				<div className="py-10 grid grid-cols-4 gap-6">
					<Place/>
					<Place/>
					<Place/>
					<Place/>
					<Place/>
					<Place/>
					<Place/>

				</div>
			</div>
		)
}

export default ChooseHoliday;