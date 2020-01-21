import type { Dispatch } from 'redux'
import { addItems } from './dataActions'
import Api from '../api'

export const loadDeliveryDates = () => {
  return async (dispatch: Dispatch<*>) => {
    const result = await Api.fetchDeliveryDates()
    const deliveryDates = result.data
    dispatch(addItems(deliveryDates))
    return deliveryDates
  }
}

export const loadDeliveryTimes = (dateString) => {
  return async (dispatch: Dispatch<*>) => {
    const result = await Api.fetchDeliveryTimes(dateString)
    const deliveryTimes = result.data
    dispatch(addItems(deliveryTimes))
    return deliveryTimes
  }
}