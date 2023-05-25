
import WhyUseCard from  '../WhyUseCard/WhyUseCard.jsx';
import './WhyUse.css'
function WhyUse() {
  return (
    <div className='WhyUse'>
      <h3>WHY CHOOSE RICA</h3>
      <h2>Welcome to Rica</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div className="WhyUse__Cards">
        <WhyUseCard/>
        <WhyUseCard/>
        <WhyUseCard/>
        <WhyUseCard/>
      </div>
    </div>
  );
}

export default WhyUse;
