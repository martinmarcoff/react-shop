import React, {useContext} from 'react';
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext'
import '../styles/MyOrder.scss';

const MyOrder = () => {
	const {state} = useContext(AppContext)
	const sumTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price
		const sum = state.cart.reduce(reducer, 0);
		return sum	
	}

const handleClick = () => {
	const divClass = document.querySelector('.MyOrder')
	console.log(divClass);
	divClass.classList.add('inactive')
}

	
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img onClick={handleClick} src="https://cdn-icons-png.flaticon.com/512/61/61178.png?w=740&t=st=1680289411~exp=1680290011~hmac=fbd59098b754c41309f25d81404acda817f029e9ff043368f91fb654c54276b2" alt="arrow"/>
				<span className="title">My order</span>
			</div>
			<div className="my-order-content">
				{state.cart.map((product, index) => (<OrderItem indexValue={index} key={index} product={product}/>))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>{`${'$'+sumTotal()}`}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;