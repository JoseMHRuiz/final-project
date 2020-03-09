import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "react-bootstrap/Card";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "2%"
  },
  paper: {
    height: 100,
    width: 250,
    margin: "0.5%"
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
        <Grid item>
          {" "}
          <Card>Affiliate</Card>{" "}
        </Grid>
      )}
      {props.dropBar && (
        <Grid item>
          {" "}
          <Card>Drop Bar</Card>
        </Grid>
      )}
      {props.juniorClass && (
        <Grid item>
          {" "}
          <Card>Principiants Friendly</Card>
        </Grid>
      )}
      {props.openBox && (
        <Grid item>
          {" "}
          <Card>Open Box</Card>
        </Grid>
      )}
      {props.kidsClass && (
        <Grid item>
          {" "}
          <Card>Kids Class</Card>
        </Grid>
      )}
    </Grid>
  );
}
