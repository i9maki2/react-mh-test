import React from 'react'
import { Drawer, Typography, IconButton,  makeStyles } from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { useSelector } from 'react-redux'

const useStyles = makeStyles(theme => ({
  
}))

const OrderSummary = (props) => {
  const { open, onClose } = props
  const classes = useStyles()
  
  return (
    <div>order summary</div>
  )
}

export default OrderSummary