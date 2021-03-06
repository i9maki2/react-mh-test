export const ADD_ITEM = 'ADD_ITEM'
export const ADD_ITEMS = 'ADD_ITEMS'
export const REPLACE_ITEMS = 'REPLACE_ITEMS'
export const RESET_DATA_STATE = 'RESET_DATA_STATE'

type State = {
  +[string]: Item,
}

const initialState: State = {}

export default (state: State = initialState, action: Object): State => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        [action.item]: action.item,
      }

    case ADD_ITEMS: {
      return {
        ...state,
        ...action.items
          .reduce((acc, item) => ({
            ...acc,
            [item.deliveryDate || item]: item,
          }), {}),
      }
    }

    case REPLACE_ITEMS: {
      return {
        ...state,
        [action.id]: action.items
      }
    }

    case RESET_DATA_STATE:
      return {
        ...initialState,
      }

    default:
      return state
  }
}
