import React, { Component } from "react";
import { Button, CardActionArea, CardMedia } from "@material-ui/core";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
// import "./BoxCard.css";

const BoxCard = ({ boxName, _id, img }) => {
  return (
    <Card style={{ width: "13.6rem" }}>
      <Card.Img variant="top" src={img[0]} />
      <Card.Title>{boxName}</Card.Title>
      <Card.Link size="small">
        <Link to={`/boxes/${_id}`}>More</Link>
      </Card.Link>
    </Card>
  );
};

export default BoxCard;
