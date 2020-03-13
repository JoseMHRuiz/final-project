import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Button from "react-bootstrap/Button";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "2%"
  },
  paperprof: {
    width: "100%",
    margin: "11px 11px 0 0",
    marginBottom: 0,
    background: "45deg, rgb(255, 255, 255) 30%, rgb(180, 180, 180) 90%",
    borderRadius: 3,
    border: 0,
    color: "black",
    height: 200,
    padding: "5 30px",
    boxShadow: "0 3px 5px 2px rgba(97, 97, 97, 0.3)",
    position: "relative"
  },
  fav: {
    position: "absolute",
    top: "1%",
    fontSize: "2rem",
    left: "75%"
  },
  text: {
    position: "absolute",
    fontSize: 12,
    left: "20%",
    top: "70%",
    margin: "0 5px"
  },
  badgeContainer: {
    position: "absolute",
    fontSize: 15,
    top: "55%",
    margin: "0 1%"
  },
  badge: {
    background: "black",
    color: "white"
  },
  link: {
    position: "absolute",
    top: "90%",
    left: "80%",
    color: "black"
  },
  img: {
    position: "absolute",
    top: "4%",
    left: "4%",
    height: "60%",
    width: "auto"
  }
}));
const BoxCard = props => {
  const {
    boxName,
    _id,
    img,
    affiliate,
    dropBar,
    juniorClass,
    openBox,
    kidsClass,
    favColor
  } = props.fav;
  console.log(props);
  const classes = useStyles();
  return (
    <Paper className={classes.paperprof}>
      <Card.Img className={classes.img} src={img[0]} />
      {props.userInSession && (
        <Button
          variant="transparent"
          className={classes.fav}
          onClick={() => props.addfav(_id)}
        >
          <FavoriteIcon style={{ fontSize: 40 }} color={favColor(_id)} />
        </Button>
      )}
      <div className={classes.badgeContainer}>
        {affiliate && <Badge className={classes.badge}>Affiliate</Badge>}
        {dropBar && <Badge className={classes.badge}>Drop</Badge>}
        {juniorClass && <Badge className={classes.badge}>Beginner</Badge>}
        {openBox && <Badge className={classes.badge}>Open</Badge>}
        {kidsClass && <Badge className={classes.badge}>Kids</Badge>}
      </div>
      <Card.Text className={classes.text}>{boxName}</Card.Text>
      <Card.Text size="small">
        <Link className={classes.link} to={`/boxes/${_id}`}>
          <MoreHorizIcon />
        </Link>
      </Card.Text>
    </Paper>
  );
};

export default BoxCard;
