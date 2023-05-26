import HeroHome from '../components/HeroHome/HeroHome';
import FleetSlider from '../components/FleetSlider/FleetSlider';
import StepsToUse from '../components/StepsToUse/StepsToUse';
import PaymentOptions from '../components/PaymentOptions/PaymentOptions';
import data from '../assets/mockdata.json';

function Home() {
  return (
    <div className="page">
      <HeroHome />
      <h1>WELCOME TO RICA</h1>
      <StepsToUse />
      <h1>Super easy booking</h1>
      <FleetSlider data={data} />
      <PaymentOptions />
    </div>
  );
}

export default Home;
