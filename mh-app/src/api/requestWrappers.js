import axios from 'axios'
import { getBaseUrl } from './index'

const request = (method, url, payload, headers, options: { overrideData: boolean } = {}) => {

  return axios(
    {
      method,
      url: `${getBaseUrl()}${url}`,
      data: options.overrideData ? payload : {
        ...payload,
      },
    },
  )
}

export const get = (url, headers) => request('GET', url, null, headers)
export const deleteRequest = (url, payload, headers) => request('DELETE', url, payload, headers)
export const head = (url, headers) => request('HEAD', url, null, headers)
export const options = (url, headers) => request('OPTIONS', url, null, headers)
export const post = (url, payload, headers, options) => request('POST', url, payload, headers, options)
export const put = (url, payload, headers) => request('PUT', url, payload, headers)
export const patch = (url, payload, headers) => request('PATCH', url, payload, headers)
