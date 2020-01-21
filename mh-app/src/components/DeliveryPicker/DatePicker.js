import React, { useState } from 'react'
import { DatePicker as MuiDatePicker } from "@material-ui/pickers"

const DatePicker = (props) => {
  const { availableDates, onAccept } = props
  const [selectedDate, setDateChange] = useState(new Date());

  return (
    <MuiDatePicker
      label="Basic example"
      value={selectedDate}
      onChange={setDateChange}
      onAccept={onAccept}
      animateYearScrolling
      format={'yyyy-mm-dd'}
      disablePast
    />
  )
}

export default DatePicker