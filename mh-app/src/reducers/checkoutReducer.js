export const ADD_ITEM_TO_CHECKOUT = 'ADD_ITEM_TO_CHECKOUT'
export const ADD_ITEMS_TO_CHECKOUT = 'ADD_ITEMS_TO_CHECKOUT'
export const RESET_CHECKOUT_STATE = 'RESET_CHECKOUT_STATE'

type State = {
  +[string]: Item,
}

const initialState: State = {}

export default (state: State = initialState, action: Object): State => {
  switch (action.type) {
    case ADD_ITEM_TO_CHECKOUT:
      return {
        ...state,
        [action.item.deliveryTimeId]: { type: 'delivery', ...action.item },
      }

    case ADD_ITEMS_TO_CHECKOUT: {
      return {
        ...state,
        ...action.items
          .reduce((acc, item) => ({
            ...acc,
            [item.deliveryDate || item]: item,
          }), {}),
      }
    }

    case RESET_CHECKOUT_STATE:
      return {
        ...initialState,
      }

    default:
      return state
  }
}
