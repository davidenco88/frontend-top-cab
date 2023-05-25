import HeroHome from '../components/HeroHome/HeroHome';
import Slider from '../components/Slider/Slider';
import data from '../assets/mockdata.json';

function Home() {
  return (
    <div className="page">
      <HeroHome />
      <h1>WELCOME TO RICA</h1>
      <h1>Super easy booking</h1>
      <Slider data={data} />
    </div>
  );
}

export default Home;
