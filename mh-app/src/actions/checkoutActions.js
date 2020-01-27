import {
  ADD_ITEM_TO_CHECKOUT,
  ADD_ITEMS_TO_CHECKOUT,
  RESET_CHECKOUT_STATE,
} from '../reducers/checkoutReducer'

export const addItem = (item) => {
  return {
    type: ADD_ITEM_TO_CHECKOUT,
    item,
  }
}

export const addItems = (items) => {
  return {
    type: ADD_ITEMS_TO_CHECKOUT,
    items,
  }
}

export const resetState = () => {
  return {
    type: RESET_CHECKOUT_STATE,
  }
}
