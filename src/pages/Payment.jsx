import HeroDefault from '../components/HeroDefault/HeroDefault';

import BookingContent from '../components/BookingContent/BookingContent';

const cabSearch = {
  title: 'CAB PAYMENT',
  details: 'Home >> Cab Payment',
};

function Payment() {
  return (
    <>
      <HeroDefault text={cabSearch} />
      <BookingContent />
    </>
  );
}

export default Payment;
