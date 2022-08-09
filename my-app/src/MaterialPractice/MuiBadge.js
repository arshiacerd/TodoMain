import React from 'react'
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
function MuiBadge() {
  return (
   <>
   <div style={{backgroundColor:"yellow"}}>
<Badge badgeContent={4} color="primary" 	>
    <MailIcon  />
</Badge>
</div>
   </>
  )
}

export default MuiBadge
