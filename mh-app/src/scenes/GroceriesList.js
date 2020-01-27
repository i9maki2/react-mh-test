import React, { useState } from 'react'
import DeliveryPicker from '../components/DeliveryPicker'
import DeliveryPickerDialog from '../components/Dialogs/DeliveryPickerDialog'
import { useMenuState } from '../hooks/mui-hooks'
import { makeStyles, Typography } from '@material-ui/core'
import Checkout from '../components/Checkout'

const useStyles = makeStyles(theme => ({
  deliveryDialog: {
    padding: theme.spacing(3),
    width: '80vw',
  }
}))

const GroceriesList = (props) => {
  const classes = useStyles()
  const [shoppingCartOpen, setShoppingCartOpen] = useState(false)
  const [anchorEl, openDeliveryDialog, closeDeliveryDialog] = useMenuState(true)

  function onDeliveryPicked(event) {
    openCheckout()
    closeDeliveryDialog()
  }

  function openCheckout() {
    setShoppingCartOpen(true)
  }

  function closeCheckout(event) {
    setShoppingCartOpen(false)
    openDeliveryDialog(event)
  }

  return (
    <div>
        {
          anchorEl && (
            <DeliveryPickerDialog classes={{ paper: classes.deliveryDialog }} open={true} onClose={closeCheckout} >
              <Typography variant="h5" component="h5">Delivery Options</Typography>
              <DeliveryPicker onPicked={onDeliveryPicked} />
            </DeliveryPickerDialog>
          )
        }
        {
          shoppingCartOpen && <Checkout open={Boolean(shoppingCartOpen)} onClose={closeCheckout} />
        }
    </div>
  )
}

export default GroceriesList
