import React, { useState } from 'react'
import { TimePicker as MuiTimePicker } from '@material-ui/pickers'

const TimePicker = (props) => {
  const { times, ...rest } = props
  const [selectedDate, setDateChange] = useState(new Date())

  console.log(times)

  return (
    <MuiTimePicker 
      label="Delivery Time" 
      value={selectedDate} 
      onChange={setDateChange} 
      autoOk 
      {...rest}
    />
  )
}

export default TimePicker