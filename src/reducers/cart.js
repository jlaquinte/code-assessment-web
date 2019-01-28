import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
  INCREASE_CART_ITEMS,
  DECREASE_CART_ITEMS
} from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {}
}

/* Added condition to remove item from cart*/
const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [ ...state, action.productId ]
    case REMOVE_FROM_CART:
      if (state.indexOf(action.productId) > -1) {
        return state.filter( stateId => stateId !== action.productId )
      }
      return state      
    default:
      return state
  }
}


const quantityById = (state = initialState.quantityById, action) => {
  const { productId } = action
  switch (action.type) {
    case ADD_TO_CART:
      console.log("******(state[productId] || 0) + 1*****")
      return { ...state,
        [productId]: (state[productId] || 0) + 1
      }
    case REMOVE_FROM_CART:
      console.log("***** REMOVE_FROM_CART *****")
      return {
        ...state,
        [productId]:0
      }
    case INCREASE_CART_ITEMS:
      console.log("INCREASE_CART_ITEMS")
      return {
        ...state,
        [productId]: (state[productId]) + 1
      }
    case DECREASE_CART_ITEMS:
      console.log("DECREASE_CART_ITEMS")
      return {
        ...state,
        [productId]: (state[productId]) - 1
      }
    default:
      return state
  }
}

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0

export const getAddedIds = state => state.addedIds

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      }
  }
}

export default cart
