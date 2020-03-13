import React from "react";
import styled from "styled-components";
const Title = styled.h1`
  font-size: 1.2em;
  text-align: center;
  color: white;
  text-shadow: 0px 0px 5px #000000;
  text-transform: capitalize;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.div`
  padding: 1em;
  /* background: linear-gradient(
    45deg,
    rgb(255, 255, 255) 30%,
    rgb(235, 235, 235) 90%
  ); */
  /* max-width:150px; */
  border-radius: 5px;
  margin: 8px 8px 0 0;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: space-around;
  background-image: url(${props => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const CardMaterial = ({ name, img, qty, upTo, have }) => {
  return (
    have && (
      <Wrapper img={img}>
        <Title>{name}</Title>
        {qty && <Title>Qty: {qty}</Title>}
        {upTo && <Title>Maximum: {upTo} KG</Title>}
      </Wrapper>
    )
  );
};
export default CardMaterial;
