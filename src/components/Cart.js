import React from 'react'
import { connect } from 'react-redux'
import { removeFromCart } from '../actions'
import { getCartProducts } from '../reducers'
import PropTypes from 'prop-types'
import Product from './Product'
import CartItem from './CartItem'

const Cart  = ({ products, quantityById, total, onCheckoutClicked, removeFromCart }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? getProductList(products, removeFromCart, quantityById) : (<em>Please add some products to cart.</em>)
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
const getProductList = (products, rmvFromCart, quantityById) =>{
  return products.map(product =>
    <CartItem 
    key={product.id}
    onRemoveFromCartClicked={() => rmvFromCart(product.id, quantityById[product.id])}>
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

export default connect(mapStateToProps, {removeFromCart})(Cart)
