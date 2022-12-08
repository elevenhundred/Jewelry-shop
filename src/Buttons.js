export default function Buttons({ filteredJewelery }) {
    return (
      <div className="buttons">
        <button className="change" onClick={() => filteredJewelery("серьги")}>
          Серьги
        </button>
        <button className="change" onClick={() => filteredJewelery("колье")}>
          Колье
        </button>
        <button className="change" onClick={() => filteredJewelery("кольцо")}>
          Кольца
        </button>
      </div>
    );
  }
  