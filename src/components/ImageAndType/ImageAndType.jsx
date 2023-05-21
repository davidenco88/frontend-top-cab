import data from '../../assets/mockdata.json';

function ImageAndType() {
  return (

    <div>
      {data.map((item) => (
        <div className="listCar" key={item.id}>
          <img className="listCar__image" src={item.image} alt={item.name} />
          <h3 className="listCar__name">{item.name}</h3>
          <p className="listCar__type">{item.type}</p>
        </div>
      ))}
      {/* <img src="" alt="" />
      <h3>CAR NAME</h3>
      <h4>Type</h4> */}
    </div>
  );
}

export default ImageAndType;
