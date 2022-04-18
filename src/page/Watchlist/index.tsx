import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';

import Stack from '@mui/material/Stack';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
const ariaLabel = { 'aria-label': 'description' };
export default function Watchlist() {
    const [alignment, setAlignment] = React.useState('left');

    const handleAlignment = (
      event: React.MouseEvent<HTMLElement>,
      newAlignment: string | null,
    ) => {
      if (newAlignment !== null) {
        setAlignment(newAlignment);
      }
    };
  return (
   <div>
       <div>
           <div>Watchlist</div>
           <div>
               <div>
                 <SearchIcon></SearchIcon>  
               </div>
               <div>
               <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <Input placeholder="Placeholder" inputProps={ariaLabel} />
    </Box>
               </div>
               </div>
       </div>
       <div>
<div>
<Stack direction="row" spacing={4}>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="left" aria-label="left aligned">
          <FormatAlignLeftIcon />
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          <FormatAlignCenterIcon />
        </ToggleButton>
    
      </ToggleButtonGroup>

     
    </Stack>
</div>
<div>
    
</div>
       </div>
   </div>
  );
}
