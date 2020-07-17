// import React, { useState } from "react";
// import axios from "axios";
// // import "./App.css";
// import styled from "styled-components";

// const InfoStyle = styled.div`
//   border: 3px dashed black;
//   box-shadow: 10px 10px 5px black;
//   text-align: center;
//   width: 27%;
//   margin: 2% 0;
//   font-size: 1rem;
//   img {
//     width: 100%;
//   }
//   &:hover {
//     width: 40%;
//     /* color: navy;
//       transition: all 0.2s ease-in-out; */
//     animation-timing-function: ease-in-out;
//     animation-direction: alternate;
//     animation-name: animate;
//     animation-duration: 2s;
//     animation-iteration-count: infinite;
//   }
//   h1 {
//     font-size: 2rem;
//   }
// `;

// export default function CharacterInfo(props) {
//   const { characterInfo } = props;
//   return (
//     <div>
//       {characterInfo.map((result) => {
//         console.log(result);
//         return (
//           <div key={result.id}>
//             <h3>Location: {result.location.name}</h3>
//             <h3>Species: {result.species}</h3>
//             <h3>Gender: {result.gender}</h3>
//             <h3>Status: {result.status}</h3>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
