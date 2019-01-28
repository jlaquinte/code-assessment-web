import React from 'react'
import { connect } from 'react-redux'
import { removeFromCart, increaseCartItems, decreaseCartItems, closeCart } from '../actions'
import { getCartProducts } from '../reducers'
import PropTypes from 'prop-types'
import Product from './Product'
import CartItem from './CartItem'
import CartIconLg from '../assets/icons/cart_icon_lg.svg'
import closeBtn from '../assets/icons/close_icon.svg'

const Cart  = ({ products, cartOpenClose, quantityById, total, onCheckoutClicked, closeCart, removeFromCart, increaseCartItems, decreaseCartItems }) => {
  
  /* Conditional rendering on this functional component */
  const hasProducts = products.length > 0
  const cartItemsContents = hasProducts ? renderProductList(products, quantityById, removeFromCart, increaseCartItems, decreaseCartItems) : renderEmptyCart()
  const checkoutSectionContents = hasProducts ? checkoutSection(total, hasProducts, onCheckoutClicked) : ""
  let hideClass = '' 

  /* Adding functionality to hide and show the cart page 
  when clicking the X button. The logic here can definitely 
  be cleaned up a bit */

  if(cartOpenClose) 
    hideClass = cartOpenClose.cartOpen ? '' : 'hide'

  return(
    <section className={'cart-section '+hideClass}>
      <h3 className="cart-container-title">Your Cart</h3>
      <div className="cart-items">
        {cartItemsContents}
      </div>
      {checkoutSectionContents}
      <img src={closeBtn} className="cart-close-btn" alt="shopping cart close button" onClick={()=>(closeCart(false))} />
    </section>
  )
}

/* Render function for the checkout section of the cart */
const checkoutSection = (total, hasProducts, onCheckoutClicked) =>{
  return(
    <div className="checkout-section">
      <div className="total-cost">
        <p className="total-title">Total:</p> <p>&#36;{total}</p>
      </div>
      <button 
        className="checkout-btn"
        onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  )
}

/* Shoe the empty cart is no items are present */
const renderEmptyCart = () =>{
  return (
    <div className="empty-cart-msg">
      <img src={CartIconLg} alt="large cart icon" className="cart-icon-lg"/> 
      <p className="please-add-msg">Please add some products to your cart.</p>
    </div>
  )
}

/* NOTE -- Adding this as it's own function to clean things up*/
/***
Return the list of products currently added to cart 
***/
const renderProductList = (products, quantityById, removeFromCart, increaseCartItems, decreaseCartItems) =>{
  return products.map(product =>
    <CartItem 
    key={product.id}
    productId={product.id}
    onIncreaseCartItems={increaseCartItems}
    onDecreaseCartItems={decreaseCartItems}
    quantityById={quantityById[product.id]}
    inventory={product.inventory}
    maxInventory={product.maxInventory}>
      <Product
        title={product.productTitle}
        price={product.price.value}
        quantity={product.quantity}>
        <button className="remove-item-btn" onClick={() => removeFromCart(product.id, quantityById[product.id])}>Remove</button>
      </Product>
    </CartItem>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

const mapStateToProps = state => {
  return {products: getCartProducts(state), quantityById: state.cart.quantityById, cartOpenClose: state.cart.cartOpenClose}
}

export default connect(mapStateToProps, {removeFromCart, increaseCartItems, decreaseCartItems, closeCart})(Cart)
