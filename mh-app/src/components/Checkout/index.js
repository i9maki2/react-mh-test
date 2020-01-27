import React from 'react'
import { Drawer, Typography,  makeStyles } from '@material-ui/core'
import { useSelector } from 'react-redux'
import OrderSummary from './OrderSummary'

const useStyles = makeStyles(theme => ({
  drawer: {
    minWidth: 500,
  },
  cartHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(5)
  },
  cartTitle: {
    display: 'flex',
  },
}))

const Checkout = (props) => {
  const { open, onClose } = props
  const classes = useStyles()

  // const cartItems = useSelector(getShoppingCartItems)
  
  return (
    <Drawer classes={{ paper: classes.drawer }} anchor="right" open={open} onClose={onClose}>
      <div className={classes.cartHeader}>
        <div className={classes.cartTitle}>
          <Typography variant="h5" component="h5">Order Summary</Typography>
        </div>
      </div>
      <OrderSummary />
    </Drawer>
  )
}

export default Checkout