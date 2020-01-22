import React from 'react'

const TimeSlot = (props) => {
  const { startTime, stopTime, inHomeAvailable } = props

  return (
    <div>
      { <span>The delivery is available between { startTime } - { stopTime }</span> }
    </div>
  )
}

export default TimeSlot