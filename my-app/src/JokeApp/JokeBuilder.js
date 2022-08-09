import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid, Typography, Button } from "@mui/material";
import image from "./laugh.png";
const JokeBuilder = () => {
  const [joke, setJoke] = useState([]);
  var no = -1;
  const [first, setfirst] = useState(false);

  const generateJoke = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => setJoke(res.data.results));
    no = no + 1;
    setfirst(true);
    // setJoke(response.data.results);
  };

  //   useEffect(() => {
  //     async function getData() {
  //       const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
  //       console.log(response.data.results);
  //       setJoke(response.data.results);
  //     }
  //     getData();
  //   }, []);
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <Grid item lg={6} sm={8} xs={12}>
          <Box
            sx={{
              p: 2,
              m: 2,

              textAlign: "center",
              backgroundColor: "black",
              color: "white",
            }}
          >
            {/* joke.map((jokes, index) => {
                  
                }) */}
            <Box mb={3}>
              <img src={image} />
            </Box>
           
            {first === true 
            
              ? joke.map((filteredData, index) => {
               
                  return (
                    <Typography key={index} variant="h4" mb={3}>
                      {filteredData.name}
                    </Typography>
                  );
                })
              
              : "false"}

            <Typography variant="subtitle2" mb={3} color="blue">
              Please Click The button to Get Joke
            </Typography>
            <Button variant="contained" onClick={generateJoke}>
              Generate Joke
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default JokeBuilder;
