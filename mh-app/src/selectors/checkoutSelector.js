import { createSelectorWithDependencies as createSelector } from 'reselect-tools'

export const checkoutItems = state => state.checkout
export const deliveryData = state => state.checkout.delivery

export const getSelectedDeliveryData = createSelector(
  [deliveryData],
  (x) => x,
)