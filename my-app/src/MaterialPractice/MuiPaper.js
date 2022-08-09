import { Paper } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const MuiPaper = () => {
  return (
  <>
  
   <Box
   sx={{
    backgroundColor: "red",
    color:"blue",
    width: "300px",
    height:"300px"

   }}
   >
   
   <Paper elevation={8} sx={{backgroundColor:"yellow" , mb:2}} >sn</Paper>
   <Paper  elevation={5}>sn</Paper>


   </Box>

  
  </>
  )
}

export default MuiPaper
