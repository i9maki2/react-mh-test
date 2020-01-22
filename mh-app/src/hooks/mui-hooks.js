import { useState } from 'react'

export function useMenuState(initialState) {
  const [anchorEl, setAnchorEl] = useState(initialState)

  function open(e) {
    setAnchorEl(e.currentTarget)
  }

  function close() {
    setAnchorEl(null)
  }

  return [anchorEl, open, close]
}
