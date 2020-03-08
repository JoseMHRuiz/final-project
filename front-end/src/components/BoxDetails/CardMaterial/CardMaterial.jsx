import React from "react";
import styled from "styled-components";
const Title = styled.h1`
  font-size: 1em;
  text-align: center;
  color: black;
  text-transform: capitalize;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.div`
  padding: 1em;
  background-image: url(${props => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
const Container = styled.div``;
const CardMaterial = ({ name, img, qty, upTo, have }) => {
  return (
    have && (
      <Wrapper className="card" img="img">
        <Container>
          <Title>{name}</Title>
          <Title>{qty}</Title>
          <Title>{upTo}</Title>
        </Container>
      </Wrapper>
    )
  );
};
export default CardMaterial;
