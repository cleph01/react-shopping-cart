import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { ProductContext } from '../src/contexts/ProductContext'; 
import { CartContext } from '../src/contexts/CartContext'; 
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item])
	};

	const removeItem = (event, itemID) => {

		event.preventDefault()

		setCart(
			cart.filter( item => {
		
				if(item.id != itemID){

					return item
				}
			})
		)
	};

	console.log(cart, "app")

	return (
		<div className="App">
			<ProductContext.Provider value={{products, addItem, removeItem}}>
				<CartContext.Provider value={cart}>

					<Navigation cart={cart} />

					{/* Routes */}
					<Route
						exact
						path="/"
						component={Products}
					/>
				
					<Route
						path="/cart"
						component={ShoppingCart}
					/>

				</CartContext.Provider>
			</ProductContext.Provider>
		</div>
	);
}

export default App;
