import React from "react";
import { Grid, Paper, Typography,Box, Container } from "@mui/material";

const Check = () => {
  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid item md={3} >
            <Paper sx={{backgroundColor:"red"}} >
              <Box >
                <Typography>hjfdb</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={3} >
            <Paper>
              <Box>
                <Typography>hjfdb</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={3} >
            <Paper>
              <Box>
                <Typography>hjfdb</Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Check;
