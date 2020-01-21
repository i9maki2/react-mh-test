import React, { useEffect, useState } from 'react'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import ErrorDialog from '../Dialogs/ErrorDialog'
import DateFnsUtils from '@date-io/date-fns'
import DatePicker from './DatePicker'
import TimePicker from './TimePicker'
import svLocale from "date-fns/locale/sv";
import { loadDeliveryDates, loadDeliveryTimes } from '../../actions/dataThunk'
import { getDeliveryDates, _deliveryDates } from '../../selectors/dataSelector'
import { useDispatch, useSelector } from 'react-redux'

const DeliveryPicker = (props) => {
  const localeMap = { se: svLocale }
  const dispatch = useDispatch()
  
  const [ errorDialogOpen, setErrorDialogOpen ] = useState(false)
  const [ locale, setLocale ] = useState('se')

  const deliveryDates = useSelector(_deliveryDates)
  console.log('deliveryDates - ', deliveryDates)

  function openErrorDialog() {
    setErrorDialogOpen(true)
  }

  function closeErrorDialog() {
    setErrorDialogOpen(false)
  }

  async function onDateChange(date) {
    await dispatch(loadDeliveryTimes('2020-01-23'))
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
      await dispatch(loadDeliveryDates())
    }
  }, [])

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={localeMap[locale]}>
        <DatePicker onAccept={onDateChange} />
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