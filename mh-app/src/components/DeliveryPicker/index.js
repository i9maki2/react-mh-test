import React, { useEffect, useState } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import ErrorDialog from '../Dialogs/ErrorDialog'
import { useMenuState } from '../../hooks/mui-hooks' 
import { formatDate, getMinAndMaxDate, DEFAULT_DATE_FORMAT } from '../../utils/dateHelperFunctions'

import DatePicker from './DatePicker'
import TimePicker from './TimePicker'

import { loadDeliveryDates } from '../../actions/dataThunk'
import { getDeliveryDates } from '../../selectors/dataSelector'
import { useDispatch, useSelector } from 'react-redux'

const DeliveryPicker = (props) => {
  const dispatch = useDispatch()
  const availableDeliveryDates = useSelector(getDeliveryDates)
  const { minDate, maxDate } = getMinAndMaxDate(Object.keys(availableDeliveryDates))
  
  const [ anchorEl, openErrorDialog, closeErrorDialog ] = useMenuState(null)
  const [ selectedDate, setSelectedDate ] = useState()
  const [ includeHomeDelivery, setIncludeHomeDelivery ] = useState(false)

  useEffect(() => {
    try {
      dispatch(loadDeliveryDates())
    } catch (error) {
      openErrorDialog()
      console.error('Could not get delivery dates ', error)
    } finally {
    }
  }, [])


  function onDateChange(date) {
    setSelectedDate(date)
  }

  return (
    <>
      <FormControlLabel 
        control={
          <Switch value={includeHomeDelivery} />
        } 
        label="I want home delivery" 
      />
      <DatePicker
        format={DEFAULT_DATE_FORMAT}
        onAccept={onDateChange}
        minDate={minDate}
        maxDate={maxDate}
        disabled={!minDate && !maxDate}
      />
      { selectedDate && <TimePicker date={formatDate(selectedDate)} includeHomeDelivery={includeHomeDelivery} /> }
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