
import StepsToUseCard from  '../StepsToUseCard/StepsToUseCard.jsx';
import './StepsToUse.css'
function StepsToUse() {
  return (
    <div className='StepsToUse'>
      <h3>WHY CHOOSE RICA</h3>
      <h2>Welcome to Rica</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
