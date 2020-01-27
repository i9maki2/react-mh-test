import React, { useEffect, useState } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { makeStyles, Button, Switch, Typography } from '@material-ui/core'
import ErrorDialog from '../Dialogs/ErrorDialog'
import { useMenuState } from '../../hooks/mui-hooks' 
import { formatDate, getMinAndMaxDate, DEFAULT_DATE_FORMAT } from '../../utils/dateHelperFunctions'
import { addItem } from '../../actions/checkoutActions'

import DatePicker from './DatePicker'
import TimePicker from './TimePicker'

import { loadDeliveryDates, loadDeliveryTimes } from '../../actions/dataThunk'
import { getDeliveryDates } from '../../selectors/dataSelector'
import { useDispatch, useSelector } from 'react-redux'
import { setLocalStorageItem, getLocalStorageItem } from '../../utils/localStorageFunctions'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
  },
  section: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  confirmButtonWrapper: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
  }
}))

const DeliveryPicker = (props) => {
  const { onPicked } = props
  const dispatch = useDispatch()
  const classes = useStyles()
  const availableDeliveryDates = useSelector(getDeliveryDates)
  const { minDate, maxDate } = getMinAndMaxDate(Object.keys(availableDeliveryDates))
  
  const [ anchorEl, openErrorDialog, closeErrorDialog ] = useMenuState(null)
  const [ selectedDate, setSelectedDate ] = useState()
  const [ selectedTimeSlot, setSelectedTimeSlot ] = useState()

  const homeDeliveryFromLocalStorage = getBooleanValue(getLocalStorageItem('includeHomeDelivery'))
  const [ includeHomeDelivery, setIncludeHomeDelivery ] = useState(() =>  homeDeliveryFromLocalStorage)

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
  }, [selectedDate])

  function getBooleanValue(value) {
    if (!value || value === null) {
      return false
    }

    if (value === 'true') {
      return true
    }

    if (value === 'false') {
      return false
    }
  }

  function onDateChange(date) {
    setSelectedDate(date)
  }

  function onTimeSlotPicked(event, timeSlot) {
    setSelectedTimeSlot(timeSlot)
  }

  function toggleHomeDelivery() {
    setLocalStorageItem('includeHomeDelivery', !includeHomeDelivery)
    setIncludeHomeDelivery(!includeHomeDelivery)
  }

  function pickDelivery(event) {
    dispatch(addItem(selectedTimeSlot))
    onPicked(event)
  }

  return (
    <div className={classes.root}>
      <div className={classes.section}>
        <Typography variant="h6" component="h6" gutterBottom>Choose delivery date:</Typography>
        <DatePicker
          format={DEFAULT_DATE_FORMAT}
          onAccept={onDateChange}
          minDate={minDate}
          maxDate={maxDate}
          disabled={!minDate && !maxDate}
        />
      </div>
      <div className={classes.section}>
        <FormControlLabel 
          control={<Switch onChange={toggleHomeDelivery} checked={includeHomeDelivery} />}
          label="I want home delivery" 
        />
      </div>
      <div className={classes.section}>
        { selectedDate && (
            <TimePicker 
              date={formatDate(selectedDate)} 
              includeHomeDelivery={includeHomeDelivery}
              onTimePick={onTimeSlotPicked}
              selectedTimeSlot={selectedTimeSlot}
            />
          )
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
      </div>
      <div className={classes.confirmButtonWrapper}>
        <Button
          disabled={!selectedTimeSlot}
          variant="contained"
          className={classes.addToCartButton}
          onClick={pickDelivery}
        >
          Confirm
        </Button>
      </div>
    </div>
  )
}

export default DeliveryPicker