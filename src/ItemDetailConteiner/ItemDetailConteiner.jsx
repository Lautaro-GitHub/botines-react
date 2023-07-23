import { useState, useEffect } from "react";
import { getProductData } from "../services/asyncMock";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/NavBar/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [productos, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
      const requestProduct = async () => {
      const respuesta = await getProductData(id);
      setProduct(respuesta);
    }

    requestProduct();
  }, [id]);

  return (
    <>
    <ItemDetail productos={productos}/>
    </>
  )
}

export default ItemDetailContainer;