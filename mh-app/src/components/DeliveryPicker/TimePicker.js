import React, { useEffect } from 'react'
import { getDeliveryTimes } from '../../selectors/dataSelector'
import { useDispatch, useSelector } from 'react-redux'
import { loadDeliveryTimes } from '../../actions/dataThunk'
import { useMenuState } from '../../hooks/mui-hooks' 
import ErrorDialog from '../Dialogs/ErrorDialog'
import TimeSlot from './TimeSlot'

const TimePicker = (props) => {
  const { date } = props
  const dispatch = useDispatch()
  const [ anchorEl, openErrorDialog, closeErrorDialog ] = useMenuState(null)

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

  if (timeOptions && timeOptions.length > 0) {
    return (
      <>  
        {
          timeOptions.map(({startTime, stopTime, isHomeAvailable}, index) => (
            <TimeSlot 
              key={`time-slot-${index}`}
              startTime={startTime} 
              stopTime={stopTime} 
              isHomeAvailable={isHomeAvailable} 
            />
          ))
        }
        { 
          anchorEl && (
            <ErrorDialog
              open={anchorEl}
              close={closeErrorDialog}
              title={'Oups, something went wrong'}
              description={'Please try again later'}
            />
          )
        }
      </>
    )
  }
  else {
    return null
  }
}

export default TimePicker