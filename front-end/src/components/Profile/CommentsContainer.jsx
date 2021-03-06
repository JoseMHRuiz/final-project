import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardCommentProfile from "./CardCommentProf";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "2%",
    maxHeight: 1000,
    maxWeight: 1000
  },
  paper: {
    maxHeight: 100,
    minHeight: 100,
    width: 350,
    margin: 1
  }
}));

export default function CommentsContainer(user) {
  const classes = useStyles();
  const { comments } = user;
  return comments ? (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container justify="center">
          {comments.map((comment, idx) => (
            <Grid className={classes.paper} key={idx} item>
              <CardCommentProfile
                key={idx}
                comment={comment}
                userInSession={user}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <div>Loading</div>
  );
}
