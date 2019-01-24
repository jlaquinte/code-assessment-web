import React from 'react'
import PropTypes from 'prop-types'


const CartItem = ({children, onRemoveFromCartClicked}) =>{
	return(
		<div className="cart-item">
		{children}
		<button className="remove-item-btn" onClick={onRemoveFromCartClicked}>Remove</button>
		</div>
	)
}

CartItem.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default CartItem