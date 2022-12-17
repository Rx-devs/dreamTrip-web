import { useDestinationsData } from '../hooks/useDestinationsData';
import Destination from './Destination';

const PopularDestinations = () => {
  const { isLoading, data, isError, error, isSuccess } = useDestinationsData();

  return (
    <div className="py-12 container mx-auto text-center">
      <div className="flex flex-col gap-4 w-3/4 lg:w-1/2 mx-auto">
        <span className="typography-caption text-xl">Choose Your</span>
        <p className="text-4xl md:text-5xl font-semibold typography-heading">Holiday Destination</p>
        <p>Explore top desntinations to choose your next travel destination. We keep traveling and searching for new things to do, we are focused on travel.
        </p>
      </div>
      {isLoading && (<div>Loading...</div>)}
      {
        isSuccess && (<div className="py-6 px-5 lg:px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {data.map((destination) => (<Destination key={destination.destination_id} destination={destination} />))}
        </div>
        )
      }
    </div>
  );
};

export default PopularDestinations;
