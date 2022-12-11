import { useState } from "react";

function Jewelery({ thing }) {
  const [showText, setShowText] = useState(false);
  const showTextClick = (element) => {
    element.showMore = !element.showMore;
    setShowText(!showText);
  };

  return (
    <div className="products">
      {thing.map((element) => {
        const {
          id,
          name,

          price,
          image,
          description,
          showMore
        } = element;
        return (
          <div key={id} className="product-card">
            <img src={image} alt="clothes" width="300px" height="450px" />
            <div className="product-info">
              <h2> {name} </h2>
              <h2> {price} </h2>
              <div className="container">
                <p>
                  {showMore
                    ? description
                    : description.substring(0, 170) + "..."}
                  <button onClick={() => showTextClick(element)}>
                    {showMore ? "Показать меньше" : "Показать больше"}
                  </button>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Jewelery;
