import React from 'react'
import { Drawer, Typography, Button, makeStyles } from '@material-ui/core'
import { useSelector } from 'react-redux'
import DeliverySummary from './DeliverySummary'
import { getSelectedDeliveryData } from '../../selectors/checkoutSelector'

const useStyles = makeStyles(theme => ({
  drawer: {
    minWidth: 500,
  },
  checkoutHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(5)
  },
  checkoutTitle: {
    display: 'flex',
  },
  orderSummaryWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    padding: theme.spacing(5)
  },
  checkoutButton: {
    width: '100%',
  }
}))

const Checkout = (props) => {
  const { open, onClose } = props
  const classes = useStyles()

  const deliveryData = useSelector(getSelectedDeliveryData)
  
  return (
    <Drawer classes={{ paper: classes.drawer }} anchor="right" open={open} onClose={onClose}>
      <div className={classes.checkoutHeader}>
        <div className={classes.cartTitle}>
          <Typography variant="h5" component="h5">Order Summary</Typography>
        </div>
      </div>
      <div className={classes.orderSummaryWrapper}>
        <div>
          {
            deliveryData && <DeliverySummary deliveryData={deliveryData} onClose={onClose} />
          }
        </div>
        <div className={classes.checkoutButtonWrapper}>
          <Button
            disabled
            variant="contained"
            className={classes.checkoutButton}
            size={'large'}
          >
            Checkout
          </Button>
        </div>
      </div>
    </Drawer>
  )
}

export default Checkout