import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

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
