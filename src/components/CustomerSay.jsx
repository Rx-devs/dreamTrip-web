import { Rating } from "@mui/material";
import { BsStarFill } from 'react-icons/bs';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FeedbackImg from '../assets/images/customerSays/Customer_feedback.png';

const CustomerSay = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto px-5">
      <div className="space-y-4 my-auto text-center md:text-left lg:text-center w-full lg:w-3/4 mx-auto md:px-3">
        <span className="text-xl typography-caption">What They Say</span>
        <h2 className="text-3xl font-semibold typography-heading">What Our Customer <br /> Say About us</h2>
        <div className="px-5 md:px-0 lg:px-6">
          <Carousel showArrows={false} showIndicators={false} useKeyboardArrows={false} showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true}>
            {
              customerSays.map((item, index) => (
                <div key={index} className="flex flex-col items-center md:items-start lg:items-center gap-6">
                  <p className="text-base text-center md:text-left lg:text-center">{item.review.slice(0, 250)}...</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold">{item.authorName}</p>
                    <Rating
                      name="simple-controlled"
                      defaultValue={item.rating}
                      precision={1}
                      icon={<BsStarFill className="w-4 h-4" />}
                      emptyIcon={<BsStarFill className="w-4 h-4" />}
                      readOnly />
                  </div>
                </div>
              ))
            }
          </Carousel>
        </div>
      </div>
      <div className="h-96">
        <img className="w-full h-full object-contain px-2 md:px-0" src={FeedbackImg} alt="" />
      </div>
    </div>
  )
};

export default CustomerSay;

const customerSays = [
  {
    authorName: "Theresa Jordan",
    review: "I am a traveller and DreamTrip helps me a lot in finding interesting tourist destinations and of course the price offered is very worth it. Great holiday and great experience with Travel-online.",
    rating: 4,
  },
  {
    authorName: "William Tudor",
    review: "We would recommend DreamTrip and will be using them again in the future, Kristy and her team gave us excellent service And have an amazing time",
    rating: 5,
  },
  {
    authorName: "Malcolm Dunnett",
    review: "I had the most amazing holiday. This was my first time to Fiji and the InterContinental. I loved every moment & cannot wait to go back again. Booking with Travel Online was professional, easy & went without a hitch. Thank you to Lisa Scull and your team.",
    rating: 3,
  },
]
