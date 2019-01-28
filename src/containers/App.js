import React from 'react'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import '../styles/styles.scss'
import cartIcon from '../assets/icons/cart_icon.svg'

const App = () => (
  <div className="store-container">
  	<header className="store-header">
  		<h2 className="store-title">ACME Store</h2>
  		<div className="cart-status">
  			<p>Your Cart Is Empty</p>
  		</div>
  	</header>
    <ProductsContainer />
    <CartContainer />
  </div>
)

export default App
