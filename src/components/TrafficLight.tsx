import styled, { keyframes, css } from "styled-components";

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

type TrafficColors = "yellow" | "red" | "green";

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
`;

interface TrafficLightProps {
  config: {
    red: {
      backgroundColor: "green" | "red" | "yellow";
      duration: number;
      next: "green" | "red" | "yellow";
    };
    yellow: {
      backgroundColor: "green" | "red" | "yellow";
      duration: number;
      next: "green" | "red" | "yellow";
    };
    green: {
      backgroundColor: "green" | "red" | "yellow";
      duration: number;
      next: "green" | "red" | "yellow";
    };
  };
  layout: "vertical" | "horizontal";
  curColor: string;
}

export default function TrafficLight({ config, curColor }: TrafficLightProps) {
  return (
    <TrafficLightContainer aria-label="traffic light">
      {Object.keys(config).map((color, index) => (
        <Light
          key={color}
          $index={index + 1}
          $backgroundColor={
            color === curColor
              ? config[color as TrafficColors].backgroundColor
              : ""
          }
        />
      ))}
    </TrafficLightContainer>
  );
}

const TrafficLightContainer = styled.div`
  background: #222;
  background-image: linear-gradient(
    transparent 2%,
    #111 2%,
    transparent 3%,
    #111 30%
  );
  width: 100px;
  height: 270px;
  border-radius: 20px;
  position: relative;
  border: 5px solid #333;

  &:before {
    background: #222;
    background-image: radial-gradient(#444, #000);
    content: "";
    width: 170px;
    height: 150px;
    margin: 0 auto;
    position: absolute;
    top: -20px;
    border-radius: 50%;
    margin-left: 0px;
    z-index: -1;
  }

  &:after {
    background: #222;
    background-image: linear-gradient(-0deg, #777 10%, #ccc 30%$, #000);
    content: "";
    width: 50px;
    height: 500px;
    margin-left: 60%;
    position: absolute;
    top: 150px;
    z-index: -1;
  }
`;
