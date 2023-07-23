import Item from "../../Item/Item";
const ItemList = (props) => {
  return (
  <div>
      <h1>Listado de Productos</h1>
      <div className="flex-container">
        {props.productos.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
)}

export default ItemList;