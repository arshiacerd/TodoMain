import React from "react";
import Slider from "@mui/material/Slider";
function SliderMat() {
 const   mark =[
        {
            value:0,
            label: "start"
        },
        {
            value:50,
            label: "mid"
        },
        {
            value:100,
            label: "stop"
        }
    ]
    const getVal=(e)=>{
       if(e.target.value===70)
       {
        // console.log(e.target.value)
      
 console.log("alert")
       }
    }
  return (
    <>
      <div style={{width:"300px", margin:40}}>
        <Slider  
            color="secondary"
            defaultValue={40}
            max={100}
            step={10}
            marks={mark}
            valueLabelDisplay="auto"
            onChange={getVal}
        />
      </div>
    </>
  );
}

export default SliderMat;
