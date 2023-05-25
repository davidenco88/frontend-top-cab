import { GiSteeringWheel } from "react-icons/gi";
import "./StepsToUseCard.css";
//TODO add json file with card data
function StepsToUseCard() {
  return (
    <div className="StepsToUseCard">
      <div className="StepsToUseCard-icon">
        <GiSteeringWheel />
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  );
}

export default StepsToUseCard;
