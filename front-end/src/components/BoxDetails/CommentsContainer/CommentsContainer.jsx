import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import Paper from "@material-ui/core/Paper";
import CardCommentProfile from "./CardCommentProf/CardCommentProf";
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

export default function CommentsContainer(user) {
  const classes = useStyles();
  console.log(user);
  // const { commentsArrDetails } = commentsObj;
  const { comments } = user;

  const { userInSession } = user;
  console.log(comments);
  return comments ? (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
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
