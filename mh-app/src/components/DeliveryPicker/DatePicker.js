import React, { useState } from 'react'
import { DatePicker as MuiDatePicker } from '@material-ui/pickers'
import { today, formatDate } from '../../utils/dateHelperFunctions'

const DatePicker = (props) => {
  const { dates, ...rest } = props
  const [selectedDate, setDateChange] = useState(today);

  return (
    <MuiDatePicker
      label="Deliver Date"
      value={selectedDate}
      onChange={setDateChange}
      animateYearScrolling
      disablePast
      {...rest}
    />
  )
}

export default DatePicker