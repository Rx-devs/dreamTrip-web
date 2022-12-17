import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsCheckCircle } from 'react-icons/bs';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";
import Preloader from '../components/Preloader';
import { useDestinationData } from '../hooks/useDestinationData';
import Layout from "../layouts/Layout";

const DestinationDetails = () => {
  const { destinationId } = useParams();
  const { isLoading, data, isError, error, isSuccess } = useDestinationData(destinationId);
  const TourInfo = [
    {
      info: 'Destination',
      value: `${data?.destination_name}`
    }, {
      info: 'Departure',
      value: `${data?.departure}`
    }, {
      info: 'Departure Time',
      value: `${data?.departure_time}`
    }, {
      info: 'Return Time',
      value: `${data?.return_time}`
    }
  ];
  const galleryImg = [
    `${data?.images?.other_imgUrl}`,
    `${data?.images?.other_imgUrl}`,
    `${data?.images?.other_imgUrl}`,
    `${data?.images?.other_imgUrl}`,

  ]
  return (
    <Layout>
      {
        isLoading && (<Preloader />)
      }

      {
        isSuccess && (
          <>
            <div style={{
              height: '400px'
            }} className='mb-10 relative'>
              <div className="absolute left-0 bottom-0 w-full h-full z-10" style={{
                backgroundImage: 'linear-gradient(rgb(0 0 0 / 25%), rgb(0 0 0 / 25%))'
              }}></div>
              <LazyLoadImage
                src={data.images.other_imgUrl}
                alt={data.images.alt}
                className='w-full h-full object-cover'
              />
              <div className='absolute top-2/4 left-1/2 -translate-x-1/2 -translate-y-2/4 z-20 text-white'>
                <span className='block text-3xl text-center typography-caption'>Amazing Tour</span>
                <h2 className='text-7xl font-semibold'>{data.location}</h2>
              </div>
            </div>
            <div className='grid grid-cols-[1fr_300px] container mx-auto gap-4'>
              <div className='space-y-10 pb-10'>
                <div className=''>
                  <div className='flex items-center gap-3 mb-2'>
                    <h3 className='text-3xl font-medium'>{data?.destination_name} Trip</h3>
                    <p>
                      <span>{data.travel_cost}</span>
                      / per person</p>
                  </div>
                  <div>{data.destination_rating}</div>
                </div>
                <div>
                  {data.description}
                </div>
                <div>
                  <ul className='space-y-6'>
                    {
                      TourInfo.map((tour) => (<li className='flex w-full' key={tour.info}>
                        <span className='w-1/4'>{tour.info}</span>
                        <span className='w-3/4'>{tour.value}</span>
                      </li>))
                    }
                    <li className='flex w-full'>
                      <span className='w-1/4'>Included</span>
                      <ul className='w-3/4 space-y-4'>
                        <li className='flex gap-10'>
                          <div className='w-1/2 flex items-center'>
                            <BsCheckCircle className='inline w-4 h-4 mr-2' />
                            <span>5 Star Accommodation</span>
                          </div>
                          <div className='w-1/2 flex items-center'>
                            <BsCheckCircle className='inline w-4 h-4 mr-2' />
                            <span>Airport Transfer</span>
                          </div>
                        </li>
                        <li className='flex gap-10'>
                          <div className='w-1/2 flex items-center'>
                            <BsCheckCircle className='inline w-4 h-4 mr-2' />
                            <span>Breakfast</span>
                          </div>
                          <div className='w-1/2 flex items-center'>
                            <BsCheckCircle className='inline w-4 h-4 mr-2' />
                            <span>Personal Guide</span>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li className='flex w-full'>
                      <span className='w-1/4'>Not Included</span>
                      <ul className='w-3/4 flex'>
                        <li className='flex gap-10 w-full'>
                          <div className='w-1/2 flex items-center'>
                            <AiOutlineCloseCircle className='inline text-xl mr-2 text-red-500' />
                            <span>Gallery Ticket</span>
                          </div>
                          <div className='w-1/2 flex items-center'>
                            <AiOutlineCloseCircle className='inline text-xl mr-2 text-red-500' />
                            <span>Lunch</span>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>

              </div>
              <aside className=''>
                <div className="flex flex-col items-center justify-center bg-gray-100 py-10 px-4">
                  <div className='space-y-4 mb-6'>
                    <h3 className='text-2xl'>Book This Tour</h3>
                    <p>Arrange your trip in advance - book this tour now!</p>
                  </div>
                  <div className=" w-full">
                    <form className="space-y-6" action="#" method="POST">
                      <div className="rounded-md shadow-sm  space-y-4">
                        <div>
                          <label htmlFor="name" className="sr-only">Name</label>
                          <input id="name" name="name" type="text" autoComplete="name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name" />
                        </div>
                        <div>
                          <label htmlFor="email-address" className="sr-only">Email</label>
                          <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
                        </div>
                        <div>
                          <label htmlFor="phone" className="sr-only">Phone</label>
                          <input id="phone" name="phone" type="tel" autoComplete="" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Phone Number" />
                        </div>
                        <div>
                          <label htmlFor="date" className="sr-only">Date</label>
                          <input id="date" name="date" type="date" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Date picker" />
                        </div>
                        <div>
                          <label htmlFor="tickets" className="sr-only">Tickets</label>
                          <input id="tickets" name="tickets" type="number" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Tickets" />
                        </div>
                      </div>
                      <div>
                        <button type="submit" className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          Book Now
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </aside>
            </div>
            <div className='space-y-4 container mx-auto'>
              <h3 className='text-2xl'>Destination Gallery</h3>
              <div className='grid grid-cols-4 gap-4'>
                {
                  galleryImg.map((img, index) => (
                    <LazyLoadImage
                      key={index}
                      src={img}
                      alt={data.images.alt}
                      className="h-48 w-full object-cover rounded"
                      effect="blur"
                    />
                  ))
                }
              </div>
            </div>
          </>
        )}
    </Layout>
  );
};
export default DestinationDetails;
