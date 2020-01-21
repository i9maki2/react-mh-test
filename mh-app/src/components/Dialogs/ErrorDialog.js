import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'

const ErrorDialog = (props) => {
  const { open, close, title, description } = props

  return (
    <Dialog
      open={open}
      onClose={close}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
    <DialogTitle id="alert-dialog-title">
      { title }
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        { description }
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={close} color="primary" autoFocus>
        OK
      </Button>
    </DialogActions>
    </Dialog>
  )
}

export default ErrorDialog
