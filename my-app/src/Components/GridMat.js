import React from 'react'
import Grid from '@mui/material/Grid';

function GridMat() {
  return (
    <>
<Grid container spacing={3} rowSpacing={0.5} columnSpacing={7}>
<Grid item  md={6} sm={6} xs={12} >
<h1 style={{backgroundColor:"red"}}>Arshia</h1>
</Grid>
<Grid item  md={6} sm={6} xs={12}>
<h1 style={{backgroundColor : "yellow"}}>Aqsa</h1>
</Grid>
<Grid item  md={6} sm={6} xs={12} >
<h1 style={{backgroundColor:"pink"}}>Arshia</h1>
</Grid>
<Grid item  md={6} sm={6} xs={12}>
<h1 style={{backgroundColor : "orange"}}>Aqsa</h1>
</Grid>
</Grid>

    </>
  )
}

export default GridMat