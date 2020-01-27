import React from 'react'
import { Drawer, Typography, IconButton,  makeStyles } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(theme => ({
  
}))

const OrderSummary = (props) => {
  const { checkoutItems } = props
  const classes = useStyles()

  console.log('order summary', checkoutItems)

  function renderItem(item) {
    const { type, deliveryDate, startTime, stopTime, inHomeAvailable } = item
    switch(type) {
      case 'delivery':
        return (
          <>
            <div>{deliveryDate}</div>
            <div>{startTime} - {stopTime}</div>
          </>
        )
  
      default: return null
    }
  }
  
  return (
    checkoutItems.map(item => renderItem(item))
  )
}

export default OrderSummary