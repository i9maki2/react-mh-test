import React from 'react'
import { getDeliveryTimes } from '../../selectors/dataSelector'
import { useSelector } from 'react-redux'
import TimeSlot from './TimeSlot'

const TimePicker = (props) => {
  const { date, includeHomeDelivery } = props
  const timeOptions = useSelector(state => getDeliveryTimes(state, date))

  if (timeOptions && timeOptions.length > 0) {
    const filteredTimeOptions = timeOptions.filter(option => includeHomeDelivery ? option.inHomeAvailable : option)

    return (
      <>  
        {
          filteredTimeOptions.map(({startTime, stopTime, inHomeAvailable}, index) => (
            <TimeSlot 
              key={`time-slot-${index}`}
              startTime={startTime} 
              stopTime={stopTime} 
              inHomeAvailable={inHomeAvailable}
            />
          ))
        }
      </>
    )
  }
  else {
    return null
  }
}

export default TimePicker