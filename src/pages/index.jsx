import { TrafficLights } from "@/components/TrafficLights";
import { Col, Container } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Container className="d-flex full-height justify-content-center align-content-center wrap">
        <Col xs={6}>
          <TrafficLights></TrafficLights>
        </Col>
      </Container>
    </>
  );
}
