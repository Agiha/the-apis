import * as React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import Box from '@mui/material/Box'
import Input from '@mui/material/Input'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft'
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter'

import Stack from '@mui/material/Stack'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
const ariaLabel = { 'aria-label': 'description' }
export default function Watchlist() {
  const [alignment, setAlignment] = React.useState('left')

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment)
    }
  }
  return <div>Trending</div>
}
