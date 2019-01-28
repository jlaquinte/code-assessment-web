import React from 'react'
import { connect } from 'react-redux'
import { openCart, closeCart } from '../actions'
import ProductsContainer from './ProductsContainer'
import CartContainer from './CartContainer'
import '../styles/styles.scss'

const App = ({openCart, closeCart}) => {

	return(
	  <div className="store-container">
	  	<header className="store-header">
	  		<h2 className="store-title">ACME Store</h2>
	  		<div className="cart-status" onClick={()=>{openCart(true)}}>
	  			<p>Your Cart Is Empty</p>
	  		</div>
	  	</header>
	    <ProductsContainer />
	    <CartContainer />
	  </div>
	)
}

const mapStateToProps = state => {
  return {state}
}

export default connect(mapStateToProps, {openCart, closeCart})(App)