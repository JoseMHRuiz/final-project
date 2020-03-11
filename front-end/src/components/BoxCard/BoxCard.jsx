import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "2%"
  },
  paper: {
    width: "19%",
    margin: "0.5%",
    marginBottom: 0,
    background:
      "linear-gradient(45deg, rgb(172, 172, 172) 30%, rgb(97, 97, 97) 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 300,
    padding: "5 30px",
    boxShadow: "0 3px 5px 2px rgba(97, 97, 97, 0.3)",
    position: "relative"
  },
  control: {
    padding: theme.spacing(2)
  },
  badge: {
    // position: "absolute",
    top: "8px",
    left: "16px"
  }
}));

const BoxCard = ({
  boxName,
  _id,
  img,
  affiliate,
  dropBar,
  juniorClass,
  openBox,
  kidsClass
}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Card.Img variant="top" src={img[0]} />
      {affiliate && (
        <Badge className={classes.badge} variant="secondary">
          Affiliate
        </Badge>
      )}
      {dropBar && (
        <Badge className={classes.badge} variant="secondary">
          Drop
        </Badge>
      )}
      {juniorClass && (
        <Badge className={classes.badge} variant="secondary">
          Beginner
        </Badge>
      )}
      {openBox && (
        <Badge className={classes.badge} variant="secondary">
          Open
        </Badge>
      )}
      {kidsClass && (
        <Badge className={classes.badge} variant="secondary">
          Kids
        </Badge>
      )}

      <Card.Title>{boxName}</Card.Title>
      <Card.Link size="small">
        <Link to={`/boxes/${_id}`}>More</Link>
      </Card.Link>
    </Paper>
  );
};

export default BoxCard;
