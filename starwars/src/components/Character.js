// Write your Character component here
import React, { useState } from "react";
import axios from "axios";
// import "./App.css";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  width: 100%;
  @keyframes animate {
    to {
      background-color: slategray;
      color: navy;
    }
  }
  div {
    border: 3px dashed black;
    box-shadow: 10px 10px 5px black;
    text-align: center;
    width: 27%;
    margin: 2% 0;
    font-size: 1rem;
    img {
      width: 100%;
    }
    &:hover {
      width: 40%;
      /* color: navy;
      transition: all 0.2s ease-in-out; */
      animation-direction: alternate;
      animation-name: animate;
      animation-duration: 3s;
      animation-iteration-count: infinite;
    }
    h1 {
      font-size: 2rem;
    }
  }
`;

export default function Character(props) {
  const { characterInfo } = props;
  console.log(characterInfo);
  //   return <div></div>;

  return (
    <CardContainer className="cardContainer">
      {characterInfo.map((result) => {
        return (
          <div key={result.id}>
            <h1>Name: {result.name}</h1>
            <img src={result.image} alt={result.name} />
            <h3>Location: {result.location.name}</h3>
            <h3>Species: {result.species}</h3>
            <h3>Gender: {result.gender}</h3>
            <h3>Status: {result.status}</h3>
          </div>
        );
      })}
    </CardContainer>
  );
}
