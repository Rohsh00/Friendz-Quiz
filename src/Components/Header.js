import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import "../MaterialDesigns/style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
    background: "linear-gradient(#e6dada,#274046)",
  },
  headerWidth: {
    maxWidth: "100vw",
  },
  contentColor:{
    color:"white"
  }
  
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper} elevation={2} >
        <Typography  className={classes.contentColor} variant="h5">Friendship Dare</Typography>
      </Paper>
    </>
  );
};

export default Header;
