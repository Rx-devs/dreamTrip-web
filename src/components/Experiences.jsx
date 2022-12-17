import React from 'react';
import tourEx from '../assets/images/stats/tour_ex.png';

const Experiences = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
      <div className="w-full px-2 h-auto md:h-96">
        <img className="h-full object-fit mx-auto" src={tourEx} alt="" />
      </div>
      <div className="text-center md:text-left space-y-5 px-6 py-2 my-auto">
        <span className="typography-caption text-xl">Our Experiences</span>
        <h2 className="text-3xl font-semibold typography-heading">With Our Experience <br /> We Will Serve You. </h2>
        <p>Since we first opened we have always prioritized the convenience of our users by providing low prices and with a easy process. </p>
        <div className="flex justfiy-center md:justfiy-start space-x-0 md:space-x-6">
          {
            stats.map((item, index) => (
              <div key={index}>
                <span className="text-2xl md:text-3xl font-semibold color-main">{item.amount}</span>
                <p className="mt-2">{item.subTitle}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}


export default Experiences;

const stats = [
  {
    subTitle: 'Years Experience',
    amount: '20K',
  },
  {
    subTitle: 'Destination Collaboration',
    amount: '400+',
  },
  {
    subTitle: 'Happy Customer',
    amount: '50K+',
  }
]
