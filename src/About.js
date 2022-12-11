import { dataAbout } from "./dataAbout";
import { useState } from "react";

function About() {
  const [info, setInfo] = useState(0);
  const { image } = dataAbout[info];

  const previousInfo = () => {
    setInfo((info) => {
      info--;
      if (info < 0) {
        info = dataAbout.length - 1;
      }
      return info;
    });
  };

  const nextInfo = () => {
    setInfo((info) => {
      info++;
      if (info > dataAbout.length - 1) {
        info = 0;
      }
      return info;
    });
  };

  return (
    <div className="about">
      <div className="product-card info">
        <img src={image} width="400px" height="600px" alt="info" />
        <div>
          <button className="change" onClick={previousInfo}>
            {" "}
            Назад{" "}
          </button>
          <button className="change" onClick={nextInfo}>
            Вперед
          </button>
        </div>
      </div>

      <div className="product-card info">
        <h1> О нас </h1>
        <p className="description">
          {" "}
          На странице нашего бренда <b>Vb_loves_jewelry</b> вы всегда найдете
          идеальные украшения: серьги с натуральным жемчугом, перламутром,
          стразами, цирконами, браслеты, колье, подвески, чокеры. Ювелирная
          бижутерия для женщин трендовые украшения, актуальные, премиальная
          бижутерия. Золотые, серебрянные украшения, с жемчугом и стразами.
          Отличная идея подарка для любимой!
        </p>
      </div>
    </div>
  );
}

export default About;
