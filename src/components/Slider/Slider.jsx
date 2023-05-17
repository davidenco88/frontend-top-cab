import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./Slider.scss";
import "@splidejs/react-splide/css";

function Slider({ data }) {
  return (
    <div className="component">
      <div className="component__info">
        <h3 className="component__info__emphasis">WIDEST VARITY</h3>
        <h2 className="component__info__title">Our Awesome fleet</h2>
        <p className="component__info__description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis eum
          voluptas quod, beatae eligendi exercitationem! At quidem alias earum!
          Perferendis corporis eaque iusto? Vel facere, ipsa temporibus aliquid
          deleniti et?
        </p>
      </div>
      <Splide
        options={{
          fixedWidth: "280px",
          type: "loop",
          center: true,
          gap: "60px",
          snap: true,
        }}
      >
        {data.map((item) => (
          <SplideSlide key={item.id}>
            <div className="container">
              <img className="container__image" src={item.image} alt="Cab" />
              <h2 className="container__textType">{item.type}</h2>
              <h3 className="container__textFee">Fee Start $12 / per Km</h3>
              <p className="container__description">{item.description}</p>
              <p>S O M E I C O N S</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Slider;
