import React from 'react'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import DatePicker from './DatePicker'
import TimePicker from './TimePicker'

const DeliveryPicker = (props) => {

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker />
      <TimePicker />
    </MuiPickersUtilsProvider>
  )
}

export default DeliveryPicker