import FeedbackImg from '../assets/images/customerSays/Customer_feedback.png'

const CustomerSay = () => {
  return(
    <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto px-5">
      <div className="space-y-4 my-auto text-center md:text-left lg:text-center w-full lg:w-3/4 mx-auto md:px-3">
        <span className="text-xl subtitle">What They Say</span>
        <h2 className="text-3xl font-semibold">What Our Customer Say About us</h2>
        <p className="text-base">I am a traveller and dreamTrip helps me a lot in finding interesting tourist destinations and of course the price offered is very worth it.</p>
        <span className="text-sm">Theresa Jordan</span>
      </div>
      <div className="h-96">
        <img className="w-full h-full object-contain px-2 md:px-0" src={FeedbackImg} alt=""/>
      </div>
    </div>
  )
};

export default CustomerSay;
