import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    margin: "auto",
    maxWidth: 300
  },
  image: {
    width: 30,
    height: 30,
    margin: 4
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

const CardCommentProfile = obj => {
  const classes = useStyles();
  // const { userInSession } = userInSession;
  const { comment } = obj.comment;
  const { userInSession } = obj;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <Avatar
              className={classes.image}
              alt="Cindy Baker"
              src={userInSession.img}
            />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography variant="body2" gutterBottom>
                  {comment}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  {userInSession.username}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              {/* <Typography variant="subtitle1">$19.00</Typography> */}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};
export default CardCommentProfile;
