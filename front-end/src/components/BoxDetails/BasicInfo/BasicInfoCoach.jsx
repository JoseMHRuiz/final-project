import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  credentialsContainer: {
    position: "relative",
    height: "100%"
  },
  paper: {
    width: 200,
    margin: "5px 5px 0 0",
    background:
      "linear-gradient(45deg, rgb(255, 255, 255) 30%, rgb(235, 235, 235) 90%)",
    borderRadius: 3,
    border: 0,
    color: "Black",
    height: 48,
    padding: "12px 30px 0 30px",
    boxShadow: "0 3px 5px 2px rgba(97, 97, 97, 0.3)"
  },
  title: {
    width: 200,
    fontSize: 30
  },
  head: {
    fontSize: 20
  },
  minMax: {
    position: "absolute",
    left: "16%"
  },
  rest: {
    position: "absolute",
    left: "60%"
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
    <Container className={classes.credentialsContainer}>
      <div className={classes.minMax}>
        <div className={classes.title}>CrossFit Certification</div>
        <div>
          <div className={classes.head}>Min Credential</div>
          <div className={classes.paper}>{coach.minCredential}</div>
        </div>
        <div>
          <div className={classes.head}>Max Credential</div>
          <div className={classes.paper}>{coach.maxCredential}</div>
        </div>
      </div>
      <div className={classes.rest}>
        <div>
          <div className={classes.head}>Credentials</div>
        </div>

        {coach.otherCredentials.map(cred => {
          return (
            <div key={cred}>
              <div className={classes.paper}>{cred}</div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}
