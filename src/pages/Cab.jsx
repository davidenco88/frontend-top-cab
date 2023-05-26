import ListedCar from '../components/ListedCar/ListedCar/ListedCar';
import HeroDefault from '../components/HeroDefault/HeroDefault';

const cabSearch = {
  title: 'CAB SEARCH',
  details: 'Home >> Cab Payment',
};

function Cab() {
  return (
    <>
      <HeroDefault text={cabSearch} />
      <ListedCar />
    </>
  );
}

export default Cab;
