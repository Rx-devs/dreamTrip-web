import React from 'react';
// import PropTypes from 'prop-types';
import Button from '@mui/material/Button';

const GetStarted = ({}) => {
  return (
    <div className="container mx-auto py-10">
      <div className="space-y-4 text-center bg-color-light px-3 py-10 w-full md:w-2/3 lg:w-1/2 mx-auto rounded-lg">
        <h2 className="text-3xl font-semibold leading-snug">Prepare Yourself <br/>&amp; Let&apos;s Explore <br/>The Beauty Of The World</h2>
        <p className="text-gray-500">We have many special offers especially for you.</p>
        <Button variant="contained">Get Started</Button>
      </div>
    </div>
  );
}

/*GetStarted.propTypes = {
  : PropTypes.
};*/

export default GetStarted;
