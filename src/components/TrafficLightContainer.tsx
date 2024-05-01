import styled from "styled-components";
import { devices } from "../constants";

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
  @media screen and ${devices.mobileL} {
    width: 70px;
    height: 150px;
  }

  &:before {
    background: #222;
    background-image: radial-gradient(#444, #000);
    content: "";
    width: 170px;
    height: 0px;
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
    height: 50px;
    margin-left: 60%;
    position: absolute;
    top: 150px;
    z-index: -1;
  }
`;

export default TrafficLightContainer;
