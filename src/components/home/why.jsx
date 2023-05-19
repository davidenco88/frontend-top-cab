import { useState } from 'react';

import './why.css';

const WhyCard = () => {


  return (
    <section class="c-section">
        <h2 class="c-section__title"><span>Why Us?</span></h2>
        <h1 className='c-section__title2'>
            Welcome to RICA
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
        <ul class="c-services">
          <div class="c-services__item">
            <img src='Ride.png' alt="rides" className= "c-services__item--photo" />
            <h3>4500 + Rides Dauly</h3>
            <p>Every daay more than 4500 customers take rides with RICA CAB.</p>
          </div>
          <div class="c-services__item">
            <img src='happyClient.png' alt="rides" className= "c-services__item--photo" />
            <h3>3,000,000 Happy Clients</h3>
            <p>Till today CAB has more than 3M  of happy customers</p>
          </div>
          <div class="c-services__item">
            <img src='Location.png' alt="rides" className= "c-services__item--photo" />
            <h3>45,000 + Locations</h3>
            <p>RICA Cab has more than 45k locations at different countries and cities.</p>
          </div>
          <div class="c-services__item">
            <img src='Cars.png' alt="rides" className= "c-services__item--photo" />
            <h3>10,000 Cabs</h3>
            <p>RICA Cab has more than 10 thousand Cabs which includes luxury Cabas too </p>
          </div>
        </ul>
      </section>
  );
};

export default WhyCard;
