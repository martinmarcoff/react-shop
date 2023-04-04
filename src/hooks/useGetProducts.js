//Custom Hook

import {useEffect, useState} from "react"
import axios from "axios"

const useGetProducts = (API) => {
  //en useState guardamos la información que pedimos a la API
    const [products, setProducts] = useState([]);

  //elemento 1: función que ejecuta el código
  //useEffect: permite hacer llamados a una API y transmitirlos al componente
  //async: hace que la función sea asincrónica. Es necesaria para usar
  //await: recibe una promesa y la convierte en un valor de retorno
  //elemento 2: arreglo que va a escuchar cada cambio, por la acción del usuario, para volver a ejecutar
  //el código
    useEffect(async () => {
      const response = await
      axios.get(API);
      setProducts(response.data); //actualizamos el state products
    }, []);  
    return products //retornamos el state products actualizado
}

export default useGetProducts