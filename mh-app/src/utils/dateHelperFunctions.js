import { format, difference_in_hours } from 'date-fns'

export const DEFAULT_DATE_FORMAT = 'yyyy-MM-dd'

export const today = () => {
  return format(new Date(), DEFAULT_DATE_FORMAT)
}

export const formatDate = (date) => {
  return format(date, DEFAULT_DATE_FORMAT)
}

export const getMinAndMaxDate = (dates) => {
  let minDate = undefined
  let maxDate = undefined

  if (dates && dates.length === 1) {
    minDate = maxDate = dates[0]
  }

  if (dates && dates.length > 0) {
    minDate = dates[0]
    maxDate = dates[dates.length - 1]
  }
  
  return { minDate, maxDate }
}