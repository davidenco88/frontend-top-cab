import './HeroHomeStyles.css';

function HeroHome() {
  return (
    <div className="hero">
      <h1>Book Your CAB</h1>
      <p>Rent Cab With Affordable Price With Rica Cab</p>
      <form>
        <input type="radio" name="diff-location" id="diff-location" value="Different" />
        <label htmlFor="diff-location">Different Location</label>
        <input type="radio" name="same-location" id="same-location" value="Same" />
        <label htmlFor="same-location">Same Location</label>
      </form>
    </div>
  );
}

export default HeroHome;
