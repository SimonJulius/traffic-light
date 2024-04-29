import TrafficLight from "./components/TrafficLight";

import "./App.css";
import { useEffect, useState } from "react";
import PressableButton from "./components/button";

export default function App() {
  const [testCofigSettings, setTestCofigSettings] = useState({
    red: {
      backgroundColor: "red",
      duration: 10000,
      next: "yellow",
    },
    yellow: {
      backgroundColor: "yellow",
      duration: 5000,
      next: "green",
    },
    green: {
      backgroundColor: "green",
      duration: 10000,
      next: "yellow",
    },
  });
  const [testCofigSettings1, setTestCofigSettings1] = useState({
    red: {
      backgroundColor: "red",
      duration: 10000,
      next: "yellow",
    },
    yellow: {
      backgroundColor: "yellow",
      duration: 5000,
      next: "green",
    },
    green: {
      backgroundColor: "green",
      duration: 10000,
      next: "yellow",
    },
  });

  type TrafficColors = "yellow" | "red" | "green";

  const [dCurColor, setDCurColor] = useState<TrafficColors>("red");
  const [dCurColor1, setDCurColor1] = useState<TrafficColors>("green");
  const [start, setStart] = useState(false);

  useEffect(() => {
    const { duration, next } = testCofigSettings[dCurColor];
    const { next: next1 } = testCofigSettings1[dCurColor];

    const timerId = setTimeout(() => {
      setDCurColor(next as TrafficColors);
      setDCurColor1(next1 as TrafficColors);
      if (dCurColor === "green") {
        setTestCofigSettings((prev) => ({
          ...prev,
          yellow: {
            backgroundColor: "yellow",
            duration: 5000,
            next: "red",
          },
        }));
      } else if (dCurColor === "red") {
        setTestCofigSettings((prev) => ({
          ...prev,
          yellow: {
            backgroundColor: "yellow",
            duration: 5000,
            next: "green",
          },
        }));
      }
      if (dCurColor1 === "green") {
        setTestCofigSettings1((prev) => ({
          ...prev,
          yellow: {
            backgroundColor: "yellow",
            duration: 5000,
            next: "red",
          },
        }));
      } else if (dCurColor1 === "red") {
        setTestCofigSettings1((prev) => ({
          ...prev,
          yellow: {
            backgroundColor: "yellow",
            duration: 5000,
            next: "green",
          },
        }));
      }
    }, duration);

    return () => {
      clearTimeout(timerId);
    };
  }, [dCurColor, dCurColor1, testCofigSettings]);

  return (
    <div className="wrapper">
      {/* <div className="cross-horizontal"> */}
      <div className="cross-horizontal">
        <div className="horizontal-light left-light">
          {start ? (
            <TrafficLight config={testCofigSettings} curColor={dCurColor} />
          ) : (
            <TrafficLight config={testCofigSettings} curColor={""} />
          )}
        </div>

        <div className="horizontal-light right-light">
          {start ? (
            <TrafficLight config={testCofigSettings} curColor={dCurColor} />
          ) : (
            <TrafficLight config={testCofigSettings} curColor={""} />
          )}
        </div>
      </div>

      <div className="cross-vertical">
        <div className="vertical-light top-light">
          {start ? (
            <TrafficLight config={testCofigSettings1} curColor={dCurColor1} />
          ) : (
            <TrafficLight config={testCofigSettings} curColor={""} />
          )}
        </div>
        <div className="vertical-light bottom-light">
          {start ? (
            <TrafficLight config={testCofigSettings1} curColor={dCurColor1} />
          ) : (
            <TrafficLight config={testCofigSettings} curColor={""} />
          )}
        </div>
      </div>

      <div className="controllers">
        <PressableButton onClick={() => setStart(true)} title="Start" />
        <PressableButton onClick={() => setStart(false)} title="Reset" />
      </div>
      {/* </div> */}
    </div>
  );
}
