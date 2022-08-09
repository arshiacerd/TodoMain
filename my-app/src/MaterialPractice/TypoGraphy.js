import React from "react";
import { Typography } from "@mui/material";
const TypoGraphy = () => {
  return (
    <>
      <Typography variant="h1" align="center" color="red">
        this is my first Typography
      </Typography>
      <Typography variant="subtitle1" gutterBottom align="center" color="blue">
        this is my first Typography
      </Typography>
      <Typography  component="button" align="center" color="black">
        this is my first Typography
      </Typography>
    </>
  );
};

export default TypoGraphy;
