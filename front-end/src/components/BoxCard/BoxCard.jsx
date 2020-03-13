import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Container } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Button from "react-bootstrap/Button";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { white } from "color-name";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "2%"
  },
  paper: {
    width: "19%",
    margin: "11px 11px 0 0",
    marginBottom: 0,
    background: "#fff",
    borderRadius: 3,
    border: 0,
    color: "black",
    height: "13rem",
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
    top: "50%",
    margin: "0 1%"
  },
  badge: {
    background: "black",
    color: "white"
  },
  link: {
    position: "absolute",
    top: "90%",
    left: "1%",
    color: "black"
  },
  img: {
    position: "absolute",
    top: "4%",
    left: "4%",
    height: "auto",
    width: "60%"
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
  } = props;

  const classes = useStyles();
  return (
    <Container id="card-boxes " className={classes.paper}>
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
    </Container>
  );
};

export default BoxCard;
