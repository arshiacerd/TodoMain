import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
function BoxMat() {
  return (
   <>
<Container maxWidth ="lg">
        <Box component="span"
        sx={{
           m:4,
           p:2,
            backgroundColor: 'red',
           
        }}
      
        // clone m={20}
        >
            <button>Hello</button>
        </Box>
        </Container>
   </>
  )
}

export default BoxMat