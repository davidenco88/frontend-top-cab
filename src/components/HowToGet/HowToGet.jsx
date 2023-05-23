
import HowToGetCard from  '../HowToGetCard/HowToGetCard.jsx';
import HowToGetCardPhone from '../HowToGetCardPhone/HowToGetCardPhone.jsx';
import './HowToGet.css'
function HowToGet() {
  return (
    <div className='HowToGet'>
      <h1><span>NEW</span></h1>
      <h3>Super Easy Booking</h3>
      <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br />
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <div class="HowToGet__Cards">
        <HowToGetCard/>
        <HowToGetCardPhone/>
      </div>
    </div>
  );
}

export default HowToGet;
