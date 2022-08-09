import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import {
  Grid,
  Paper,
  Typography,
  Box,
  Container,
  TextField,
  List,
  ListItem,
  ListItemText,
  Avatar,
  IconButton,
} from "@mui/material";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
import { fontSize } from "@mui/system";

const Todo = () => {
  const id = uuid();
  var showTime = new Date();
  var displayTime = showTime.getHours() + ":" + showTime.getMinutes();
  const [data, setData] = useState([]);
  const [complt, setComplt] = useState([]);
  const delData = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const sendData = (id, text) => {
    setComplt((prevData) => [...prevData, { id: id, text: text }]);
    setData(data.filter((item) => item.id !== id));
  };
  return (
    <>
      <Container>
        <Grid container spacing={3}>
          <Grid item md={12} m={5}>
            <Paper sx={{ textAlign: "center" }} elevation={8}>
              <Box p={2}>
                <Typography mb={2} variant="h5">
                  React Todo list app
                </Typography>
                <TextField
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      setData((prevData) => [
                        ...prevData,
                        { id: id, text: e.target.value },
                      ]);

                      //   e.target.value = "";
                    }
                  }}
                  variant="outlined"
                  label="Add Regular Task"
                  sx={{ width: "70%" }}
                ></TextField>
              </Box>
            </Paper>
          </Grid>

          <Grid item md={6}>
            <Paper elevation={8}>
              <Box p={2}>
                <Typography variant="h5">Remaining Task</Typography>
                
                <List>
                  {data.map((displayData) => {
                    return (
                      <ListItem
                        key={displayData.id}
                        secondaryAction={
                          <>
                            <IconButton
                              edge="end"
                              aria-label="delete"
                              size="large"
                              color="success"
                              onClick={() =>
                                sendData(displayData.id, displayData.text)
                              }
                            >
                              <DoneOutlineIcon fontSize="medium" />
                            </IconButton>
                            <IconButton
                              edge="end"
                              aria-label="delete"
                              size="large"
                              color="error"
                              onClick={() => delData(displayData.id)}
                            >
                              <DeleteForeverRoundedIcon fontSize="medium" />
                            </IconButton>
                          </>
                        }
                      >
                        <Avatar
                          sx={{
                            backgroundColor: "blue",
                            width: 44,
                            height: 44,
                          }}
                        >
                          {displayData.text[0]}
                        </Avatar>

                        <ListItemText
                          variant="h5"
                          sx={{ ml: 3, fontSize: "23px" }}
                          primary={displayData.text}
                        />
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={6}>
            <Paper elevation={8}>
              <Box p={2}>
                <Typography variant="h5">Completed Task</Typography>
                <List>
                  {complt.map((compltData) => {
                    return (
                      <ListItem key={compltData.id}>
                        <Avatar
                          sx={{
                            backgroundColor: "green",
                            width: 44,
                            height: 44,
                          }}
                        >
                          {compltData.text[0]}
                        </Avatar>

                        <ListItemText
                          sx={{ ml: 3 }}
                          primary={compltData.text}
                          secondary={displayTime}
                        ></ListItemText>
                      </ListItem>
                    );
                  })}
                </List>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Todo;
