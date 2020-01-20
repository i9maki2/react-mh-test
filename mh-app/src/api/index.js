import endpoints from './endpoints'
import {
  get,
} from './requestWrappers'
import {
  fetchDeliveryDates,
  fetchDeliveryTimes,
} from './fetchFunctions'

export const getBaseUrl = () => 'https://api.mathem.io/mh-test-assignment/'

export default {
  endpoints,

  get,

  fetchDeliveryDates,
  fetchDeliveryTimes,
}
