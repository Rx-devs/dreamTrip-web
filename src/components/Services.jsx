import React from 'react';
// import PropTypes from 'prop-types';
import TourImg from '../assets/images/services/tour.png'
import GlobeImg from '../assets/images/services/around_the_globe.png'
import BookingImg from '../assets/images/services/booking.png'

const Services = ({}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_4fr] gap-10 container mx-auto py-10">
      <div className="space-y-3 px-5 md:pr-4 mx-auto text-center lg:text-left">
        <span className="text-base subtitle">What We Serve</span>
        <h2 className="text-3xl md:text-4xl font-semibold lg:leading-normal">Top Values For You</h2>
        <p>Try various types of benefits when using our services.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-10 md:gap-6">
        {
          servicesList.map((service,index)=>(
            <div key={index} className="space-y-3 text-center lg:text-left">
              <img className="mx-auto lg:mx-0" src={service?.img} alt="Tour Service"/>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p>{service.subTitle}</p>
            </div>
          ))
        }
      </div>

    </div>
  );
}

// Services.propTypes = {
//   : PropTypes.
// };

export default Services;

const servicesList = [
  {
    title:'Lot Of Choices',
    subTitle:'Total 400+ destinations that we work with.',
    img: GlobeImg
  },
  {
    title:'Best Tour Guide',
    subTitle:'Our tour guide with 15+ years of experience.',
    img: TourImg
  },
  {
    title:'Easy Booking',
    subTitle:'With an early and fast purchase process.',
    img: BookingImg
  }
]
