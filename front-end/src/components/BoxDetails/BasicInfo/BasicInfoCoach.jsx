import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "react-bootstrap/Card";
import { Container, Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "2%"
  },
  paper: {
    width: 200,
    margin: "0.5%",
    background:
      "linear-gradient(45deg, rgb(172, 172, 172) 30%, rgb(97, 97, 97) 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "12px 30px 0 30px",
    boxShadow: "0 3px 5px 2px rgba(97, 97, 97, 0.3)"
  },
  title: {
    fontSize: 20
  },
  control: {
    padding: theme.spacing(2)
  }
}));

export default function BasicInfoContainerCoach(props) {
  const classes = useStyles();
  const { coach } = props;
  console.log(coach);
  return (
    <Container>
      <div container className={classes.root}>
        <div item xs={7}>
          <div className={classes.title}>Min Credential</div>
          <div className={classes.paper}>{coach.minCredential}</div>
        </div>
        <div item xs={7}>
          <div className={classes.title}>Max Credential</div>
          <div className={classes.paper}>{coach.maxCredential}</div>
        </div>
        <div container className={classes.root}>
          <div item>
            <div className={classes.title}>Other Credentials</div>
          </div>

          {coach.otherCredentials.map(cred => {
            return (
              <div item>
                <div className={classes.paper}>{cred}</div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
