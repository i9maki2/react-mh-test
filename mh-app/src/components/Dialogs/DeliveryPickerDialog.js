import React from 'react' 
import { Dialog, DialogContent } from '@material-ui/core'

const DeliveryDialog = (props) => {
  const { open, onClose, children, ...rest } = props

  return (
    <Dialog
      open={open}
      onClose={onClose}
      onBackdropClick={onClose}
      aria-labelledby="product-dialog"
      aria-describedby="product-dialog"
      { ...rest }
    >
      <DialogContent>
        { children }
      </DialogContent>
    </Dialog>
  )
}

export default DeliveryDialog
