import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { cartContext } from "../../../Context/cartContext";
import { Link } from "react-router-dom";


const ItemDetail = (props) => {
    const { productos } = props;
    const {addToCart} = useContext(cartContext)
    const [isAddedToCart, setIsAddedToCart] = useState(false);

    function handleAddToCart(quantity){
        addToCart(productos, quantity)
        alert(`Agregaste${quantity} unidades de ${productos.title} al carrito`);
        setIsAddedToCart(true);
    }

    return (
        <div className="cardInfo">
            <div>
                <img width={300} src={productos.img} alt="imagen"></img>
            </div>
            <div className="cardInfoDetails">
                <div>
                    <h3 className="cardInfoTitle">{productos.title}</h3>
                    <p className="cardInfoDesc">{productos.description}</p>
                </div>
                <div>
                    <h5 className="cardInfoPrice">Price: $ {productos.price}</h5>
                </div>
                {
                    isAddedToCart? <Link to="/Cart"><button>Ir al carrito</button></Link>: 
                    <ItemCount onAddToCart={handleAddToCart} stock={productos.stock} />
                }
                <ItemCount stock={productos.stock} />
            </div>
        </div>
    )
}

export default ItemDetail;