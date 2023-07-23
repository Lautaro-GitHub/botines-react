import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getData,{getCategory} from "../../../services/asyncMock";
import ItemList from "../ItemList/ItemList";


const ItemListContainer =  () => {
  const [productos, setProducts] = useState([]);
  const { categoryId } = useParams();

   const productsRequest = async () => {
      let res = categoryId ? await getCategory(categoryId) : await getData();
      setProducts(res);
  }
  useEffect(() => {
      productsRequest();
  }, [categoryId]);


  return (
    <>
    <ItemList productos={productos}/>
    </>
  );
}

export default ItemListContainer;