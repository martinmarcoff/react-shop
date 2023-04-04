import React, {useContext} from 'react';
import '../styles/ProductItem.scss';
import AddToCartImage from '../assets/icons/bt_add_to_cart.svg'
import AppContext from '../context/AppContext'

//recibe como argumento el elemento product (del array products), proveniente de ProductList. 
//es cada elemento del array que pedimos a la API
const ProductItem = ({product}) => {
	const{addToCart} = useContext(AppContext)
	
	const handleClick = item => {
		addToCart(item)
	}
	

	return (
		<div className="ProductItem">
			{/* utiliza las propiedades del state para renderizar */}
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					{/* utiliza las propiedades del state para renderizar */}
					<p>{product.title}</p>
					<p>${product.price}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={AddToCartImage} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;