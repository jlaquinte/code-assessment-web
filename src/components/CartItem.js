import React from 'react'



const CartItem = ({productId, children, onRemoveFromCartClicked, onIncreaseCartItems, onDecreaseCartItems}) =>{
	return(
		<div className="cart-item">
			{children}
			<div className="amount-btn-container">
				<button className="amount-btn decrease-amount-btn" onClick={()=>{
					onDecreaseCartItems(productId)
				}}>&#8211;</button>
				<div className="amount-display">1</div>
				<button className="amount-btn increase-amount-btn" onClick={()=>{onIncreaseCartItems(productId)}}>+</button>			
			</div>
		</div>
	)
}

export default CartItem