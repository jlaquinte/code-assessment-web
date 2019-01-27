import React from 'react'



const CartItem = ({productId, children, onRemoveFromCartClicked, onIncreaseCartItems, onDecreaseCartItems}) =>{
	return(
		<div className="cart-item">
		{children}
		<button className="remove-item-btn" onClick={onRemoveFromCartClicked}>Remove</button>
		<button className="decrease-amount-btn" onClick={()=>{
			onDecreaseCartItems(productId)
		}}>
		-</button>
		<button className="increase-amount-btn" onClick={()=>{onIncreaseCartItems(productId)}}>+</button>
		</div>
	)
}


export default CartItem