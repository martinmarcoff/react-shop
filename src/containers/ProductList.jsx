//ProductList es el contenedor de los elementos que van a ser renderizados

import React from "react";
import ProductItem from "../components/ProductItem";
import "../styles/ProductList.scss";
import useGetProducts from "../hooks/useGetProducts";

//variable que almacena los productos de la API(database),
//traido del endpoint especificado
const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
  //la constante products almacena la ajax call con el endpoint API como argumento
 const products = useGetProducts(API)
  return (
    <section className="main-container">
      <div className="ProductList">
        {/* mapeamos/iteramos el state products y le pasamos cada elemento (product) del array (products)
         a ProductItem para que lo utilice */}
        {products.map((product) => (
          <ProductItem product={product} key={product.id}/>
        ))}
      </div>
    </section>
  );
};



export default ProductList;
