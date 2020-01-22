import { format } from 'date-fns';

export const DEFAULT_DATE_FORMAT = 'yyyy-MM-dd'

export const today = () => {
  return format(new Date(), DEFAULT_DATE_FORMAT)
}

export const formatDate = (date) => {
  return format(date, DEFAULT_DATE_FORMAT)
}