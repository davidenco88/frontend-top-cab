import "./Failed.scss";
import TitleAndInfo from "../TitleAndInfo/TitleAndInfo";
import notFound from "../../assets/Failed/notFound.png";

const failed = {
  title: "Oops! We are Unable To Process Your Payment",
  description:
    "Looks like we encountered an error. Please try again. If you continue to have issues, try another payment method.",
};

function Failed({ button }) {
  return (
    <main className="failed">
      <img className="failed__img" src={notFound} alt="404 not found" />
      <TitleAndInfo failed={failed} />
      <button type="button" className="failed__button">
        Try Again
      </button>
    </main>
  );
}

export default Failed;
