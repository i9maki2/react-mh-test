import React, { useEffect, useState } from 'react'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import ErrorDialog from '../Dialogs/ErrorDialog'
import { useMenuState } from '../../hooks/mui-hooks' 

import DateFnsUtils from '@date-io/date-fns'
import DatePicker from './DatePicker'
import TimePicker from './TimePicker'
import { formatDate } from '../../utils/dateHelperFunctions'

import { loadDeliveryDates, loadDeliveryTimes } from '../../actions/dataThunk'
import { getDeliveryDates, _deliveryDates } from '../../selectors/dataSelector'
import { useDispatch, useSelector } from 'react-redux'

const DeliveryPicker = (props) => {
  const dispatch = useDispatch()
  const deliveryDates = useSelector(_deliveryDates)
  
  const [ anchorEl, openErrorDialog, closeErrorDialog ] = useMenuState(null)

  useEffect(() => {
    try {
      getDeliveryDates()
    } catch (error) {
      openErrorDialog()
      console.error('Could not get delivery dates ', error)
    } finally {
    }

    async function getDeliveryDates() {
      await dispatch(loadDeliveryDates())
    }
  }, [])

  async function onDateChange(date) {
    await dispatch(loadDeliveryTimes(formatDate(date)))
  }

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker onAccept={onDateChange} />
        <TimePicker />
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