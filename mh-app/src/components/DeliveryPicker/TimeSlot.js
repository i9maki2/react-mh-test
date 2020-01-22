import React from 'react'

const TimeSlot = (props) => {
  const { startTime, stopTime, isHomeAvailable } = props

  return (
    <div>
      { <span>The delivery is available between { startTime } - { stopTime }</span> }
    </div>
  )
}

export default TimeSlot