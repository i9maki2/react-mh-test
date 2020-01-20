import React, { useState } from 'react'
import { DatePicker as MuiDatePicker } from "@material-ui/pickers"

const DatePicker = (props) => {
  const { availableDates } = props
  const [selectedDate, setDateChange] = useState(new Date());

  return (
    <MuiDatePicker
      label="Basic example"
      value={selectedDate}
      onChange={setDateChange}
      animateYearScrolling
    />
  )
}

export default DatePicker