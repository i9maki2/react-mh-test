import React, { useState } from 'react'
import { DatePicker } from "@material-ui/pickers"
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

const DeliveryDate = (props) => {
  const { availableDates } = props
  const [selectedDate, setDateChange] = useState(new Date());

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        label="Basic example"
        value={selectedDate}
        onChange={setDateChange}
        animateYearScrolling
      />
    </MuiPickersUtilsProvider>
  )
}

export default DeliveryDate