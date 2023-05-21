import data from '../../assets/mockdata.json';
import ImageAndType from '../ImageAndType/ImageAndType';
import './ListedCar.scss';

function ListedCar() {
  return (
    <div className="listedCar">
      <h1>Listed Car</h1>
      <ImageAndType data={data} />
    </div>
  );
}

export default ListedCar;
