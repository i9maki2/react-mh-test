import React, { useEffect } from 'react'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import DatePicker from './DatePicker'
import TimePicker from './TimePicker'
import Api from '../api'

const DeliveryPicker = (props) => {

  useEffect(() => {
    getDeliveryDates()

    async function getDeliveryDates() {
      const result = await Api.fetchDeliveryDates()
      console.log(result)
    }
  }, [])

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker />
      <TimePicker />
    </MuiPickersUtilsProvider>
  )
}

export default DeliveryPicker