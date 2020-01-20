import endpoints from './endpoints'
import {
  get,
  post,
} from './requestWrappers'
import {
  fetchDeliveryDates,
  fetchDeliveryTimes,
} from './fetchFunctions'

export const getBaseUrl = () => 'https://api.mathem.io/mh-test-assignment/'

export default {
  endpoints,

  get,
  post,

  fetchDeliveryDates,
  fetchDeliveryTimes,
}
