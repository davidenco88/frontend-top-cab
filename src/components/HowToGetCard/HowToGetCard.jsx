import { GiSteeringWheel } from "react-icons/gi";
import "./HowToGetCard.css";
//TODO add json file with card data
function HowToGetCard() {
  return (
    <div className="HowToGetCard">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
     <div className="HowToGetCard__Downloads">
     <button className="HowToGetCard__Downloads--Mac-icon">
        App Sotre
      </button>
      <button className="HowToGetCard__Downloads--Andorid-icon">
        PlayStore
      </button>
     </div>
    </div>

  );
}

export default HowToGetCard;
