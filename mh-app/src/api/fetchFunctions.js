import endpoints from './endpoints'
import { get, post } from './requestWrappers'

export const fetchDeliveryDates = async () => {
  return await get(endpoints.deliveryDates)
}

export const fetchDeliveryTimes = async (dataString) => {
  const payload = { dataString }
  return await post(endpoints.deliveryTimes, payload)
}