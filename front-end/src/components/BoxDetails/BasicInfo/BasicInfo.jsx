import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "react-bootstrap/Card";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "2%"
  },
  paper: {
    width: 200,
    margin: "0.5%",
    marginBottom: 0,
    background:
      "linear-gradient(45deg, rgb(172, 172, 172) 30%, rgb(97, 97, 97) 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "5 30px",
    boxShadow: "0 3px 5px 2px rgba(97, 97, 97, 0.3)"
  },
  control: {
    padding: theme.spacing(2)
  }
}));

export default function BasicInfoContainer(props) {
  const classes = useStyles();
  console.log(props);
  return (
    <Grid container className={classes.root}>
      {props.affiliate && (
        <Grid className={classes.paper} item>
          {" "}
          <div className={classes.root}>Affiliate</div>{" "}
        </Grid>
      )}
      {props.dropBar && (
        <Grid className={classes.paper} item>
          {" "}
          <div className={classes.root}>Drop Bar</div>
        </Grid>
      )}
      {props.juniorClass && (
        <Grid className={classes.paper} item>
          {" "}
          <div className={classes.root}>Principiants Friendly</div>
        </Grid>
      )}
      {props.openBox && (
        <Grid className={classes.paper} item>
          {" "}
          <div className={classes.root}>Open Box</div>
        </Grid>
      )}
      {props.kidsClass && (
        <Grid className={classes.paper} item>
          {" "}
          <div className={classes.root}>Kids Class</div>
        </Grid>
      )}
    </Grid>
  );
}
