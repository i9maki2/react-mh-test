import {
  ADD_ITEM,
  ADD_ITEMS,
  REMOVE_ITEM,
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

export const removeItem = (wfid) => {
  return {
    type: REMOVE_ITEM,
    wfid,
  }
}

export const resetState = () => {
  return {
    type: RESET_DATA_STATE,
  }
}
