import React, { useEffect, useState } from 'react'
import { getDeliveryTimes } from '../../selectors/dataSelector'
import { useDispatch, useSelector } from 'react-redux'
import TimeSlot from './TimeSlot'
import { loadDeliveryTimes } from '../../actions/dataThunk'
import { useMenuState } from '../../hooks/mui-hooks'

const TimePicker = (props) => {
  const { date, includeHomeDelivery, onTimePick, selectedTimeSlot } = props
  const [ anchorEl, openErrorDialog, closeErrorDialog ] = useMenuState(null)
  const dispatch = useDispatch()

  const timeOptions = useSelector(state => getDeliveryTimes(state, date))

  useEffect(() => {
    if (date) {
      try {
        dispatch(loadDeliveryTimes(date))
      } catch (error) {
        openErrorDialog()
        console.error('Could not get delivery times ', error)
      } finally {
      }
    }
  }, [date])

  function onTimeSlotClick(event, timeSlot) {
    onTimePick && onTimePick(event, timeSlot)
  }

  if (timeOptions && timeOptions.length > 0) {
    const filteredTimeOptions = timeOptions.filter(option => includeHomeDelivery ? option.inHomeAvailable : true)

    return (
      <>  
        {
          filteredTimeOptions.map((timeSlot, index) => (
            <TimeSlot 
              key={`time-slot-${index}`} 
              timeSlot={timeSlot} 
              selected={selectedTimeSlot && Boolean(selectedTimeSlot.deliveryTimeId === timeSlot.deliveryTimeId)} 
              onClick={onTimeSlotClick} 
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