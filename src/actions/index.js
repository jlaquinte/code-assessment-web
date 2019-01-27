import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

/* adding remove from cart action */
const removeFromCartUnsafe = (productId, quantity) => ({
  type: types.REMOVE_FROM_CART,
  productId,
  quantity,
})

/* action to decrease the number of items in the cart */
const decreaseCartItemsUnsafe = (productId) =>({
  type: types.DECREASE_CART_ITEMS,
  productId
})


/* action to increase the number of items in the cart */
const increaseCartItemsUnsafe = (productId) =>({
  type: types.INCREASE_CART_ITEMS,
  productId
})

/* increase cart item dispatch to middleware */
export const increaseCartItems = (productId) => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
      console.log("INVENTORY - "+getState().products.byId[productId].inventory)
      dispatch(increaseCartItemsUnsafe(productId))    
  }
  else{
    console.log("*** ELSE STATEMENT ***")
  }
}

/* decrease cart item dispatch to middleware */
export const decreaseCartItems = (productId, quantity) => (dispatch, getState) => {
    console.log("INVENTORY - "+getState().products.byId[productId].inventory)
    //if(getState().products.byId[productId].inventory > 2){
    dispatch(decreaseCartItemsUnsafe(productId))
  //}
}


/* remove from cart dispatch to middleware */
export const removeFromCart = (productId, quantity) => (dispatch, getState) => {
    dispatch(removeFromCartUnsafe(productId, quantity))
}

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}
