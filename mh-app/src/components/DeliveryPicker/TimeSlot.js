import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import CheckCircle from '@material-ui/icons/CheckCircle'
import Colors from '../../constants/colors'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: theme.palette.grey[200],
    minHeight: 50,
    borderRadius: 4,
    marginBottom: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: theme.palette.grey[300],
    }
  },
  icon: {
    color: theme.palette.grey[500],
  },
  overlay: {
    top: 0,
    left: 0,
    position: 'absolute',
    height: '100%',
    width: '100%',
    border: `1px solid ${Colors.teal}`,
    borderRadius: 4,
    boxSizing: 'border-box',
  },
  overlayIcon: {
    top: -10,
    left: -10,
    position: 'absolute',
    color: Colors.teal,
    fontSize: 20,
  },
}))

const TimeSlot = (props) => {
  const { timeSlot, selected, onClick } = props
  const { startTime, stopTime, inHomeAvailable } = timeSlot
  const classes = useStyles()

  function onTimeSlotClick(event) {
    onClick(event, timeSlot)
  }

  return (
    <div className={classes.root} onClick={onTimeSlotClick}>
      <Typography variant="body1">{ startTime } - { stopTime }</Typography>
      {
        inHomeAvailable && (
          <div>
            <HomeIcon classes={{ root: classes.icon }} />
          </div>
        )
      }
      {
        selected && (
          <>
            <div className={classes.overlay} />
            <CheckCircle className={classes.overlayIcon} size={'small'} />
          </>
        )
      }
    </div>
  )
}

export default TimeSlot