import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, ADD_TO_CART, REMOVE_FROM_CART, INCREASE_CART_ITEMS, DECREASE_CART_ITEMS } from '../constants/ActionTypes'

const products = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        inventory: state.inventory - 1
      }
    /* Adding removed cart items back to products total  */
    case REMOVE_FROM_CART:
      console.log("**** action.quantity *****")
      console.log(action.quantity)
      return {
        ...state,
        inventory: state.inventory + (action.quantity || 1)
      }
    default:
      return state
  }
}

const byId = (state = {}, action) => {
  
  
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return {
        ...state,
        ...action.products.reduce((obj, product) => {
          obj[product.id] = product
          return obj
        }, {})
      }
    case DECREASE_CART_ITEMS:
      console.log("**** DECREASE_CART_ITEMS Reducer *****")  
      var { inventory, ...remaining } = state[action.productId]    
      return {...state, [action.productId]:{ ...remaining, inventory: inventory + 1}
    }
    case INCREASE_CART_ITEMS:
      console.log("**** INCREASE_CART_ITEMS Reducer *****")
      var { inventory, ...remaining } = state[action.productId]
      return {...state, [action.productId]:{ ...remaining, inventory: inventory - 1}
    }
    default:
      const { productId } = action
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action)
        }
      }
      return state
  }
}

const visibleIds = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      return action.products.map(product => product.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds
})

export const getProduct = (state, id) =>
  state.byId[id]

export const getVisibleProducts = state =>
  state.visibleIds.map(id => getProduct(state, id))
