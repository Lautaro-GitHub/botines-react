import React, { useState } from "react";
import "./ItemCount.css";
import ButtonComponent from "../ButtonComponent/Button";

function ItemCount({stock}) {
  const [clickCount, setClickCount] = useState(1);

  function handleClickAdd() {
    if (clickCount === stock) {
    }else{
   setClickCount(clickCount + 1);
    }
  }

  function handleClickSub() {
    if (clickCount > 1) {
      setClickCount(clickCount - 1);
    }
  }

  return (
    <div className="item-count-container">
      <button className="item-count-button" onClick={handleClickSub}>
        -
      </button>
      <h2 className="count-text">{clickCount}</h2>
      <button className="item-count-button" onClick={handleClickAdd}>
        +
      </button>
     <ButtonComponent colorFondo="purple">Añadir al carrito</ButtonComponent>
    </div>
  );
}

export default ItemCount;