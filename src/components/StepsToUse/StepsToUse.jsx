
import StepsToUseCard from  '../StepsToUseCard/StepsToUseCard.jsx';
import './StepsToUse.css'
function StepsToUse() {
  return (
    <div className='StepsToUse'>
      <h3>Super Easy Booking</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
      <div class="StepsToUse__Cards">
        <StepsToUseCard/>
        <StepsToUseCard/>
        <StepsToUseCard/>
        <StepsToUseCard/>
      </div>
    </div>
  );
}

export default StepsToUse;
