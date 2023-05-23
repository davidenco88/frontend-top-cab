import { GiSteeringWheel } from "react-icons/gi";
import "./StepsToUseCard.css";
//TODO add json file with card data
function StepsToUseCard() {
  return (
    <div class="StepsToUseCard">
      <div className="StepsToUseCard-icon">
        <GiSteeringWheel />
      </div>
      <h3>4500 + Rides Dauly</h3>
      <p>Every daay more than 4500 customers take rides with RICA CAB.</p>
    </div>
  );
}

export default StepsToUseCard;
