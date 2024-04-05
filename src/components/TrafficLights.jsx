import { useState } from "react";
import { Button, Stack } from "react-bootstrap";

export function TrafficLights() {
  const [lights, setLights] = useState("red");

  return (
    <>
      <Stack
        className="traffic-light-container justify-content-center"
        gap={3}
        direction="vertical"
      >
        <Button
          className={`light red ${lights === "red" ? "active" : ""}`}
          variant="danger"
          onClick={() => setLights("red")}
        ></Button>
        <Button
          className={`light yellow ${lights === "yellow" ? "active" : ""}`}
          variant="warning"
          onClick={() => setLights("yellow")}
        ></Button>
        <Button
          className={`light green ${lights === "green" ? "active" : ""}`}
          variant="success"
          onClick={() => setLights("green")}
        ></Button>
      </Stack>
    </>
  );
}
