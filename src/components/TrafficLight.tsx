import Light from "./Light";
import TrafficLightContainer from "./TrafficLightContainer";
// import { devices } from "../constants";

export type TrafficColors = "yellow" | "red" | "green";

interface TrafficLightProps {
  config: {
    red: {
      backgroundColor: TrafficColors;
      duration: number;
      next: TrafficColors;
    };
    yellow: {
      backgroundColor: TrafficColors;
      duration: number;
      next: TrafficColors;
    };
    green: {
      backgroundColor: TrafficColors;
      duration: number;
      next: TrafficColors;
    };
  };
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
