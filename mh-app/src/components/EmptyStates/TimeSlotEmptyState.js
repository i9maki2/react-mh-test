import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(12),
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
  icon: {
    fontSize: theme.typography.h2.fontSize,
    color: theme.palette.grey[300],
  },
  titleWrapper: {
    marginTop: theme.spacing(1),
    textAlign: 'center',
  },
  title: {
    fontSize: theme.typography.h5.fontSize,
    color: theme.palette.text.primary,
  },
  description: {
    fontSize: theme.typography.body1.fontSize,
    color: theme.palette.text.secondary,
  },
}))

const TimeSlotEmptyState = (props) => {
  const classes = useStyles(props)

  return (
    <div className={classes.root}>
      <div className={classes.titleWrapper}>
        <>
          <div className={classes.title}>No timeslots available</div>
          <div className={classes.description}>Please pick another date</div>
        </>
      </div>
    </div>
  )
}

export default TimeSlotEmptyState
