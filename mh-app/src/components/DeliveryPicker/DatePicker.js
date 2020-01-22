import React, { useState } from 'react'
import { DatePicker as MuiDatePicker } from '@material-ui/pickers'
import { today, formatDate, DEFAULT_DATE_FORMAT } from '../../utils/dateHelperFunctions'

const DatePicker = (props) => {
  const { availableDates, onAccept } = props
  const [selectedDate, setDateChange] = useState(today);

  return (
    <MuiDatePicker
      label="Basic example"
      value={selectedDate}
      onChange={setDateChange}
      onAccept={onAccept}
      animateYearScrolling
      format={DEFAULT_DATE_FORMAT}
      disablePast
    />
  )
}

export default DatePicker