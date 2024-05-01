import Light from "./Light";
import TrafficLightContainer from "./TrafficLightContainer";
// import { devices } from "../constants";

type TrafficColors = "yellow" | "red" | "green";

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
