import "./TitleAndInfo.scss";

function TitleAndInfo({ failed }) {
  const { title, description } = failed;
  return (
    <div className="comp">
      <h1 className="comp__title">{title}</h1>
      <p className="comp__description">{description}</p>
    </div>
  );
}

export default TitleAndInfo;
