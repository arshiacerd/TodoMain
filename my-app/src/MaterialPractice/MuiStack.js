import React from 'react'
import { Stack, Typography} from '@mui/material'
export const MuiStack = () => {
  return (
   <>
    <Stack direction="row" spacing={10}>
    <Typography variant="h3">heading 3</Typography>
    <Typography variant ="h4">heading 4</Typography>
    </Stack>
   </>
  )
}
