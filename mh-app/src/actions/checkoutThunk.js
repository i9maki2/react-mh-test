import type { Dispatch } from 'redux'
import { addItem } from './checkoutActions'

export const addItemToCheckout = (item) => {
  return async (dispatch: Dispatch<*>) => {
    dispatch(addItem(item))
  }
}