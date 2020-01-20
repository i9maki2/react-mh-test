import React, { useState } from 'react'
import { TimePicker as MuiTimePicker } from "@material-ui/pickers"

const TimePicker = (props) => {
  const [selectedDate, setDateChange] = useState(new Date());

  return (
    <MuiTimePicker autoOk label="12 hours" value={selectedDate} onChange={setDateChange} />
  )
}

export default TimePicker