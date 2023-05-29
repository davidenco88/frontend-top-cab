import './BookingContent.css';

import BookingSummery from '../BookingSummery/BookingSummery';
import CouponForm from '../CouponForm/CouponForm';
import ContactDetailsForm from '../ContactDetailsForm/ContactDetailsForm';

function BookingContent() {
  return (
    <div className="BookingContent">
      <div className="gridColumn-1">
        <ContactDetailsForm />
      </div>
      <div className="gridColum-2">
        <div>
          <BookingSummery />
        </div>
        <div>
          <CouponForm />
        </div>

      </div>
    </div>
  );
}

export default BookingContent;
