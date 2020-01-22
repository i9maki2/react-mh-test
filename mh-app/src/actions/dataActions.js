import {
  ADD_ITEM,
  ADD_ITEMS,
  RESET_DATA_STATE,
} from '../reducers/dataReducer'

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    item,
  }
}

export const addItems = (items) => {
  return {
    type: ADD_ITEMS,
    items,
  }
}

export const resetState = () => {
  return {
    type: RESET_DATA_STATE,
  }
}
