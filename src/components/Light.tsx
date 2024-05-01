import styled, { css, keyframes } from "styled-components";
import { devices } from "../constants";

const yellowLightPulse = keyframes`
  0% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const yellowLightAnimation = () =>
  css`
    ${yellowLightPulse} 800ms infinite 2600ms;
  `;

const Light = styled.div<{
  $backgroundColor: string;
  $index: number;
}>`
  background-color: #555;
  background-image: radial-gradient(#533, transparent);
  background-size: 5px 5px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: absolute;
  top: ${(props) =>
    props.$index === 1 ? "20px" : props.$index === 2 ? "100px" : "185px"};
  left: 20px;
  border: dotted 2px ${(props) => props.$backgroundColor};
  box-shadow: 0 0 20px #111 inset, 0 0 10px ${(props) => props.$backgroundColor};
  background-color: ${(props) => props.$backgroundColor};
  animation: ${(props) =>
    props.$backgroundColor === "yellow" && yellowLightAnimation};
  @media screen and ${devices.mobileL} {
    width: 30px;
    height: 30px;
    top: ${(props) =>
      props.$index === 1 ? "12px" : props.$index === 2 ? "60px" : "110px"};
  }
`;

export default Light;
