import React, { useState } from "react";
import { Rating } from "@mui/material";
const MuiRating = () => {
  const [value, setValue] = useState(2.5);
  const handleChnage =(e,newValue)=>{
        setValue(newValue)
}
  return (
    
    <>
      {value}
      <Rating  onChange={handleChnage} defaultValue={2.5} precision={0.5}  value={value} />
    </>
  );
};

export default MuiRating;
