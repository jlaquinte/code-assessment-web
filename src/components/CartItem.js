import React from 'react'


const CartItem = ({productId, inventory, maxInventory, children, quantityById, onRemoveFromCartClicked, onIncreaseCartItems, onDecreaseCartItems}) =>{

	/* Conditional logic to diable buttons */
	const isIncreaseBtnDisabled = quantityById >= maxInventory ? true : false;
	const isDecreaseBtnDisabled = quantityById === 1 ? true : false;

	/* Render for the items in the cart */
	return(
		<div className="cart-item">
			{children}
			<div className="amount-btn-container">
				<button className="amount-btn decrease-amount-btn" disabled={isDecreaseBtnDisabled} onClick={()=>{
					onDecreaseCartItems(productId)
				}}>&#8211;</button>
				<div className="amount-display">{quantityById}</div>
				<button className="amount-btn increase-amount-btn" disabled={isIncreaseBtnDisabled} onClick={()=>{onIncreaseCartItems(productId)}}>+</button>			
			</div>
		</div>
	)
}

export default CartItem