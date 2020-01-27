import React from 'react'
import { Button, Typography, makeStyles } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'

const useStyles = makeStyles(theme => ({
  orderItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.palette.grey[200],
    minHeight: 50,
    borderRadius: 4,
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  icon: {
    color: theme.palette.grey[500],
  },
  editDeliveryButtonWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
  }
}))

const DeliverySummary = (props) => {
  const { deliveryData, onClose } = props
  const { deliveryDate, startTime, stopTime, inHomeAvailable } = deliveryData
  const classes = useStyles()
  
  return (
    <>
      <Typography gutterBottom variant="h6" component="h6">Delivery:</Typography>
      <div className={classes.orderItem}>
        <Typography variant="body1">Date: {deliveryDate}</Typography>
      </div>
      <div className={classes.orderItem}>
        <Typography variant="body1">Time slot: {startTime} - {stopTime}</Typography>
        {
          inHomeAvailable && (
            <div>
              <HomeIcon classes={{ root: classes.icon }} />
            </div>
          )
        }
      </div>
      <div className={classes.editDeliveryButtonWrapper}>
        <Button onClick={onClose}>Edit Delivery Options</Button>
      </div>
    </>
  )
}

export default DeliverySummary