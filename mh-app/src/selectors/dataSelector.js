import { createSelectorWithDependencies as createSelector } from 'reselect-tools'
import createCachedSelector from 're-reselect'

export const deliveryDates = state => state.data
export const getDate = (state, date): Item => state.data[date]

export const getDeliveryDates = createSelector(
  [deliveryDates],
  (x) => x,
)

export const getDeliveryTimes = createCachedSelector(
  [getDate],
  (date) => {
    return typeof date === 'object' ? date : null
  }
)((state, date) => date)