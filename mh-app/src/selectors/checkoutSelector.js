import { createSelectorWithDependencies as createSelector } from 'reselect-tools'

export const checkoutItems = state => state.checkout

export const getCheckoutItems = createSelector(
  [checkoutItems],
  (x) => Object.values(x),
)