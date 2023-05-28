import HeroDefault from '../components/HeroDefault/HeroDefault';

const cabSearch = {
  title: 'CAB BOOKING',
  details: 'Home >> Cab Booking',
};

function Booking() {
  return (
    <>
      <HeroDefault text={cabSearch} />
      <h2>more...</h2>
    </>
  );
}

export default Booking;
