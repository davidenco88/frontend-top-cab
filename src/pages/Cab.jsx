import ListedCar from '../components/ListedCar/ListedCar/ListedCar';
import HeroDefault from '../components/HeroDefault/HeroDefault';
import ListFilter from '../components/ListFilter/ListFilter';
import './Cab.scss';

const cabSearch = {
  title: 'CAB SEARCH',
  details: 'Home >> Cab Payment',
};

function Cab() {
  return (
    <>
      <HeroDefault text={cabSearch} />
      <main className="cabMain">
        <ListFilter className="cabMain__filter" />
        <ListedCar className="cabMain__list" />
      </main>

    </>
  );
}

export default Cab;
