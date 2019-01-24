import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const Cart  = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0
  const nodes = hasProducts ? getProductList(products) : (<em>Please add some products to cart.</em>)

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
const getProductList = (products) =>{
  return products.map(product =>
      <Product
        title={product.productTitle}
        price={product.price.value}
        quantity={product.quantity}
        key={product.id}
      />
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
