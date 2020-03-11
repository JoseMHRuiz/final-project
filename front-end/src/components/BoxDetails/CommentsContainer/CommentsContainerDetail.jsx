import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardComment from "./CardComment/CardComment";
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

export default function CommentsContainerDetail(comments) {
  const { commentsArrDetails } = comments;
  console.log(comments);
  const classes = useStyles();

  return commentsArrDetails ? (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {commentsArrDetails.map((comment, idx) => (
            <Grid className={classes.paper} key={idx} item>
              <CardComment key={idx} comment={comment} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <div>Loading</div>
  );
}
