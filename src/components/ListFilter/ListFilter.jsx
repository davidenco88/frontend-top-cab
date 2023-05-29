import { useState } from 'react';
import {
  FaBars,
  FaWindowClose,
} from 'react-icons/fa';
import CheckFilter from './CheckFilter';
import './ListFilter.scss';

const carTypes = {
  title: 'Car Types',
  checks: ['Mini',
    'Medium',
    'Standard',
    'Van',
    'Luxury'],
};
const carCapacity = {
  title: 'Capacity',
  checks: [
    '1 - 5',
    '6 - 10',
    '10 or More',
  ],
};
const carOptions = {
  title: 'Car Option',
  checks: ['Automatic',
    'Manual',
  ],
};

function ListFilter() {
  const [menuHide, setMenuHide] = useState(true);

  const handleClikMenu = () => setMenuHide(!menuHide);

  return (
    <section className="listFilter">
      <div className="listFilter__title">
        <h3 className="listFilter__title__text">Latest Filter</h3>
        {menuHide
          ? <FaBars onClick={handleClikMenu} className="listFilter__title__text" />
          : <FaWindowClose onClick={handleClikMenu} className="listFilter__title__text" />}
      </div>
      <div className={menuHide
        ? 'listFilter__options hide'
        : 'listFilter__options'}
      >
        <CheckFilter data={carTypes} />
        <CheckFilter data={carCapacity} />
        <CheckFilter data={carOptions} />
      </div>
    </section>
  );
}

export default ListFilter;
