import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import "./CardWidget.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../../Context/cartContext";

const CardWidget = () => {
  const context = useContext(cartContext);
  return (
   <Link to="/Cart">
    <div className="carrito">
        <FontAwesomeIcon icon={faCartShopping} />
        
        <span>{context.getTotalItemsInCart()}</span>
    </div>
    </Link>
  )
}

export default CardWidget;