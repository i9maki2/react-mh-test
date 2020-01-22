import React, { useState } from 'react'
import { DatePicker as MuiDatePicker } from '@material-ui/pickers'
import { today } from '../../utils/dateHelperFunctions'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

const DatePicker = (props) => {
  const { dates, ...rest } = props
  const [selectedDate, setDateChange] = useState(today);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <MuiDatePicker
        label="Deliver Date"
        value={selectedDate}
        onChange={setDateChange}
        animateYearScrolling
        disablePast
        {...rest}
      />
    </MuiPickersUtilsProvider>
  )
}

export default DatePicker