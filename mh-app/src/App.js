import React, { useState } from 'react'
import DeliveryPicker from './components/DeliveryPicker'
import { Provider } from 'react-redux'
import { initStore } from './store'
import DeliveryPickerDialog from './components/Dialogs/DeliveryPickerDialog'
import { useMenuState } from './hooks/mui-hooks'
import { makeStyles, Typography } from '@material-ui/core'
import Checkout from './components/Checkout'

const useStyles = makeStyles(theme => ({
  deliveryDialog: {
    padding: theme.spacing(3),
    width: '80vw',
  }
}))

function App() {
  const store = initStore()
  const classes = useStyles()
  const [shoppingCartOpen, setShoppingCartOpen] = useState(false)
  const [anchorEl, openDeliveryDialog, closeDeliveryDialog] = useMenuState(true)

  function onDeliveryPicked(event) {
    openCheckout()
  }

  function openCheckout() {
    setShoppingCartOpen(true)
  }

  function closeCheckout() {
    setShoppingCartOpen(false)
  }

  return (
    <Provider store={store}>
        {
          anchorEl && (
            <DeliveryPickerDialog classes={{ paper: classes.deliveryDialog }} open={true} >
              <Typography variant="h5" component="h5">Delivery Options</Typography>
              <DeliveryPicker onPicked={onDeliveryPicked} />
            </DeliveryPickerDialog>
          )
        }
        {
          <Checkout open={shoppingCartOpen} onClose={closeCheckout} />
        }
    </Provider>
  )
}

export default App
