import { createSelectorWithDependencies as createSelector } from 'reselect-tools'

export const _deliveryDates = state => state.data

export const getDeliveryDates = createSelector(
  [_deliveryDates]
)