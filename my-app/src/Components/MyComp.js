import React from 'react';
import Button from '@mui/material/Button';
// import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Radio from '@mui/material/Radio';
import { useState } from 'react';

function MyComp() {
  // const [use, setuse] =  useState({
  //   color:"black"
  // })
 const [radioval, setRadioVal] = useState({
  male :true,
  female:false,
 })

 function checkRadio(e){
  
  if(e.target.value==="male")
  {
    setRadioVal(()=>{
      return{
        male:true,
        female:false
      }
    })
  }
  else if(e.target.value==="female")
  {
    setRadioVal(()=>{
      return{
        female:true,
        male:false
      }
    })
  }
 }
    // function getVal(e){
      
    //     if(e.target.checked===true)
    //     {
    //       setuse({
    //         color:"red"
    //       })  
    //     }
    //     else if(e.target.checked===false)
    //     {
    //         setuse({
    //             color:"black"
    //         })
    //     }
        
    // }
  return (
   <>

{/* <Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button> */}
{/* <Checkbox   value="arshia" onChange={getVal}  style={use} icon={<FavoriteIcon />} checkedIcon={<FavoriteIcon />} /> */}
<br />
<label htmlFor="">Male</label>
<Radio
 value="male"
 
 onChange={checkRadio}
 
 checked={radioval.male}
/>
<label htmlFor="">Female</label>
<Radio
 value="female"
 onChange={checkRadio}
 checked={radioval.female}
/>
   </>
  )
}

export default MyComp