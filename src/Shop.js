import { data } from "./data";
import { useState } from "react";
import Buttons from "./Buttons";
import Jewelery from "./Jewelery";

export default function Shop() {
  const [jewelery, setJewelery] = useState(data);
  
  const chosenItem = (itemName) => {
    const newJewelery = data.filter(
      (element) => element.searchTerm === itemName
    );
    setJewelery(newJewelery);
  };
  const allJewelery = () => {
    setJewelery(data);
  }

  return (
    <div className="App">
      <div className="cont">
        <h1 className="back"> Акция: бесплатная доставка! </h1>
      </div>
      <Buttons filteredJewelery={chosenItem} allJewelery={allJewelery} />
      <Jewelery thing={jewelery} />
    </div>
  );
}
