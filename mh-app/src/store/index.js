import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { registerStore, getStore } from './storeRegistry'
import reducers from '../reducers'

import * as ReselectTools from 'reselect-tools'
import selectors from '../selectors'

export const initStore = () => {
  const preloadedState = {}

  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

  const store = createStore(
    combineReducers(reducers),
    preloadedState,
    composeEnhancers(
      applyMiddleware(thunk),
    ),
  )

  ReselectTools.registerSelectors(selectors)

  registerStore(store)
  return store
}

export {
  registerStore,
  getStore,
}
