import React, { useState } from "react";
import Slider from "@mui/material/Slider";

function RangeSlider() {
 const [val , setVal] =   useState([30,90])
 const handleSlider =(e,item)=>{
    console.log(e,item)
    setVal(item)
 }
  return (
    <>
     <div style={{ width: "300px", margin: 50 }}>
        <Slider
          color="secondary"
          valueLabelDisplay="auto"
          value={val}
          onChange={handleSlider}
        />
       
      </div>
    </>
  );
}

export default RangeSlider;
