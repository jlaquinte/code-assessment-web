import React from 'react'
import { connect } from 'react-redux'
import { removeFromCart, increaseCartItems, decreaseCartItems } from '../actions'
import { getCartProducts } from '../reducers'
import PropTypes from 'prop-types'
import Product from './Product'
import CartItem from './CartItem'

const Cart  = ({ products, quantityById, total, onCheckoutClicked, removeFromCart, increaseCartItems, decreaseCartItems }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? getProductList(products, quantityById, removeFromCart, increaseCartItems, decreaseCartItems) : (<em>Please add some products to cart.</em>)
  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
      <button onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}>
        Checkout
      </button>
    </div>
  )
}

/* NOTE -- Adding this as it's own function to clean things up*/
/***
Return the list of products currently added to cart 
***/
const getProductList = (products, quantityById, removeFromCart, increaseCartItems, decreaseCartItems) =>{
  return products.map(product =>
    <CartItem 
    key={product.id}
    productId={product.id}
    onIncreaseCartItems={increaseCartItems}
    onDecreaseCartItems={decreaseCartItems}
    quantityById={quantityById[product.id]}
    onRemoveFromCartClicked={() => removeFromCart(product.id, quantityById[product.id])}>
      <Product
        title={product.productTitle}
        price={product.price.value}
        quantity={product.quantity}
      />
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
