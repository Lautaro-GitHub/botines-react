import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (props) => {
    const { productos } = props;

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
                <ItemCount stock={productos.stock} />
            </div>
        </div>
    )
}

export default ItemDetail;