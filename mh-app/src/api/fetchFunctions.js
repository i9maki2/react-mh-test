import endpoints from './endpoints'
import { get } from './requestWrappers'

export const fetchDeliveryDates = async () => {
  return await get(endpoints.deliveryDates)
}

export const fetchDeliveryTimes = async (dateString) => {
  return await get(endpoints.deliveryTimes(dateString))
}