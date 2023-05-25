import HeroHome from '../components/HeroHome/HeroHome';
import FleetSlider from '../components/FleetSlider/FleetSlider';
import data from '../assets/mockdata.json';

function Home() {
  return (
    <div className="page">
      <HeroHome />
      <h1>WELCOME TO RICA</h1>
      <h1>Super easy booking</h1>
      <FleetSlider data={data} />
    </div>
  );
}

export default Home;
