import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import BoxCard from "./CardBoxesProf";

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
    width: 200,
    margin: "5px 5px 0 0"
  }
}));

export default function BoxContainerProf(user) {
  const classes = useStyles();
  console.log(user);
  const { favs } = user;
  console.log(favs);
  return favs ? (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container justify="center">
          {favs.map((fav, idx) => (
            <Grid className={classes.paper} key={idx} item>
              <BoxCard key={idx} fav={fav} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  ) : (
    <div>Loading</div>
  );
}
