import React, { useEffect, useState } from 'react'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import ErrorDialog from '../Dialogs/ErrorDialog'
import { useMenuState } from '../../hooks/mui-hooks' 

import DateFnsUtils from '@date-io/date-fns'
import DatePicker from './DatePicker'
import TimePicker from './TimePicker'
import { today, formatDate, getMinAndMaxDate, DEFAULT_DATE_FORMAT } from '../../utils/dateHelperFunctions'

import { loadDeliveryDates, loadDeliveryTimes } from '../../actions/dataThunk'
import { getDeliveryDates } from '../../selectors/dataSelector'
import { useDispatch, useSelector } from 'react-redux'

const DeliveryPicker = (props) => {
  const dispatch = useDispatch()
  const availableDeliveryDates = useSelector(getDeliveryDates)
  const { minDate, maxDate } = getMinAndMaxDate(Object.keys(availableDeliveryDates))
  
  const [ anchorEl, openErrorDialog, closeErrorDialog ] = useMenuState(null)
  const [ selectedDate, setSelectedDate ] = useState()

  useEffect(() => {
    try {
      dispatch(loadDeliveryDates())
    } catch (error) {
      openErrorDialog()
      console.error('Could not get delivery dates ', error)
    } finally {
    }
  }, [])

  useEffect(() => {
    if (selectedDate) {
      try {
        dispatch(loadDeliveryTimes(formatDate(selectedDate)))
      } catch (error) {
        openErrorDialog()
        console.error('Could not get delivery times ', error)
      } finally {
      }
    }
  }, selectedDate)

  function onDateChange(date) {
    setSelectedDate(date)
  }

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          format={DEFAULT_DATE_FORMAT}
          onAccept={onDateChange}
          minDate={minDate}
          maxDate={maxDate}
          disabled={!minDate && !maxDate}
        />
        <TimePicker
          times={selectedDate}
          disabled={!selectedDate}
        />
      </MuiPickersUtilsProvider>
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

export default DeliveryPicker