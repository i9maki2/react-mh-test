import React, { useEffect, useState } from 'react'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import ErrorDialog from '../Dialogs/ErrorDialog'
import DateFnsUtils from '@date-io/date-fns'
import DatePicker from './DatePicker'
import TimePicker from './TimePicker'
import Api from '../../api'

const DeliveryPicker = (props) => {
  const [ errorDialogOpen, setErrorDialogOpen ] = useState(false)

  function openErrorDialog() {
    setErrorDialogOpen(true)
  }

  function closeErrorDialog() {
    setErrorDialogOpen(false)
  }

  useEffect(() => {
    try {
      getDeliveryDates()
    } catch (error) {
      openErrorDialog()
      console.error('Could not get delivery dates ', error)
    } finally {
    }

    async function getDeliveryDates() {
      const deliveryDatesResult = await Api.fetchDeliveryDates()
      const deliverTimesResult = await Api.fetchDeliveryTimes()
      console.log(deliveryDatesResult.data)
      console.log(deliverTimesResult.data)
    }
  }, [])

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker />
        <TimePicker />
      </MuiPickersUtilsProvider>
      { 
        errorDialogOpen && (
          <ErrorDialog
            open={errorDialogOpen}
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