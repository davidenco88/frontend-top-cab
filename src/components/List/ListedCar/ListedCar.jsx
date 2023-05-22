import data from '../../../assets/mockdata.json';
import ImageAndType from '../ImageAndType/ImageAndType';
import InfoIcons from '../InfoIcons/InfoIcons';
import ListPrice from '../ListPrice/ListPrice';
import OrangeButton from '../OrangeButton/OrangeButton';
import './ListedCar.scss';

function ListedCar() {
  return (
    <div className="list">
      {data.map((item) => (
        <div className="list__listedCar" key={item.id}>
          <ImageAndType item={item} />
          <InfoIcons item={item} />
          <ListPrice item={item} />
          <OrangeButton text="Book now" />
        </div>
      ))};
    </div>
  );
}

export default ListedCar;
