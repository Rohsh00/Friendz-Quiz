import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../MaterialDesigns/style.css";
import { makeStyles } from "@material-ui/styles";
import { Container, Typography, Box } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth:600
  },
  media: {
    height: 300,
    cursor: "default",
  },
  text: {
    textAlign: "center",
  },
  button: {
    cursor: "pointer",
    alignItems: "",
  },
  margin: {
    marginTop: "30px",
    marginBottom: "",
  },
  cardAction: {
    justifyContent: "center",
  },
}));

const HomeScreen = ({ quiz }) => {
  const classes = useStyles();
  return (
    <>
      <Header></Header>

      <Box m={8} >
        <Container maxWidth="sm">
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="./images/cover.jpeg"
               
              />
            </CardActionArea>
            <CardContent>
              <Typography variant="h5" component="h1" className={classes.text}>
                Friendship Dare
              </Typography>
             
            </CardContent>

            <CardActions className={classes.cardAction}>
              <Button
                size="large"
                variant="outlined"
                className={classes.button}
                onClick={quiz}
                
              >
                Start
              </Button>
            </CardActions>
          </Card>
        </Container>
      </Box>
      <Footer></Footer>
    </>
  );
};

export default HomeScreen;
