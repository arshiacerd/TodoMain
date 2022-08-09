import React from 'react'
import { Stack, Typography, Avatar} from '@mui/material'
function MuiAvatar() {
  return (
   <>
<Stack direction = 'row' spacing={3}>
<Avatar sx={{backgroundColor:"red"}}>AM</Avatar>
<Avatar sx={{backgroundColor:"blue"}}>RS</Avatar>

</Stack>
   </>
  )
}

export default MuiAvatar