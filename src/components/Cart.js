import React from 'react'
import { connect } from 'react-redux'
import { removeFromCart, increaseCartItems, decreaseCartItems } from '../actions'
import { getCartProducts } from '../reducers'
import PropTypes from 'prop-types'
import Product from './Product'
import CartItem from './CartItem'
import CartIconLg from '../assets/icons/cart_icon_lg.svg'
import closeBtn from '../assets/icons/close_icon.svg'

const Cart  = ({ products, quantityById, total, onCheckoutClicked, removeFromCart, increaseCartItems, decreaseCartItems }) => {
  const hasProducts = products.length > 0
  const cartItemsContents = hasProducts ? renderProductList(products, quantityById, removeFromCart, increaseCartItems, decreaseCartItems) : renderEmptyCart()
  const checkoutSectionContents = hasProducts ? checkoutSection(total, hasProducts, onCheckoutClicked) : ""

  return (
    <section className="cart-section">
      <h3 className="cart-container-title">Your Cart</h3>
      <div className="cart-items">
        {cartItemsContents}
      </div>
      {checkoutSectionContents}
      <img src={closeBtn} className="cart-close-btn" alt="shopping cart close button" onClick={()=>{}} />
    </section>
  )
}


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
  console.log('*** FROM CART ***')
  console.log(state)
  return {products: getCartProducts(state), quantityById: state.cart.quantityById}
}

export default connect(mapStateToProps, {removeFromCart, increaseCartItems, decreaseCartItems})(Cart)
