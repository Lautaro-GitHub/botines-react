import { Link } from "react-router-dom";
import ButtonComponent from "../components/NavBar/ButtonComponent/Button";
import "./Item.css"

const Item = (props) => {
  const { id, title, img, price, description } = props;

  return (
    <div className="item-card">
         <div className="item-card_header">
        <h2>{title}</h2>
      </div>
      <div className="item-card_img">
        <img src={img} alt="imagen"></img>
      </div>
      <div className="item-card_detail">
        <h4>$ {price}</h4>
        <small>{description}</small>
      </div>
      <Link to={`/producto/${id}`}>
        <ButtonComponent colorFondo="purple">Ver Producto</ButtonComponent>
      </Link>
    </div>
  );
}

export default Item;