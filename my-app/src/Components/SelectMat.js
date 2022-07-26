import React, { useState } from 'react'
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
function SelectMat() {
  const [lang, setLang] =  useState("")
  return (
   <>
   <div style={{margin:50,width:"120px"}}>
    <label id="demo-simple-select-label">Lang</label> 
    <Select 
   id="demo-simple-select-label"
    label="Lang"
    value={lang}
    onChange={(e)=>{setLang(e.target.value)}}
    
    >
    <MenuItem value={"Java"}>Java</MenuItem>
    <MenuItem value={"Node"}>Node</MenuItem>
    <MenuItem value={"C++"}>C++</MenuItem>
    <MenuItem value={"Python"}>Python</MenuItem>
    </Select>
    </div>
   </>
  )
}

export default SelectMat