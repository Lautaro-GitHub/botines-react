import Item from "../../Item/Item";
const ItemList = (props) => {
  return (
  <div>
      <h1>Listado de Productos</h1>
      <div className="d-flex flex-wrap justify-content-around">
        {props.productos.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
)}

export default ItemList;