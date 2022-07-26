import React from "react";
import Slider from "@mui/material/Slider";
import { useState } from "react";

function InputSlider() {
  const [val, setVal] = useState(30);
  const sendVal = (event) => {
    //console.log(event.target.value)
    setVal(event.target.value === "" ? "" : Number(event.target.value));
    // setVal(event.target.value)
  };
  // console.log(val)
  // const handleSlider=()=>{
  //     setVal(newValue)
  // }

  return (
    <>
      <div style={{ width: "300px", margin: 50 }}>
        <Slider
          color="secondary"
          valueLabelDisplay="auto"
          value={typeof val === "number" ? val : 0}
          defaultValue={30}
        />
        <input type="number" onChange={sendVal} />
      </div>
    </>
  );
}

export default InputSlider;
