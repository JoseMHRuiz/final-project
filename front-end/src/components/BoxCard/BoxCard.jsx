import React, { Component } from "react";
import { Button } from "@material-ui/core";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
// import "./BoxCard.css";

const BoxCard = ({ boxName, _id }) => {
  return (
    <div>
      <h2>{boxName}</h2>
      <Button>
        <Link to={`/boxes/${_id}`}>More</Link>
      </Button>
    </div>
  );
};

export default BoxCard;
