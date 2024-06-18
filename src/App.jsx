import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image } from "react-bootstrap";

function App() {
  return (
    <Container>
      <h1>Cricket </h1>
      <h3>Player</h3>
      <Row>
        <Col sm={4}>
          <Image
            src="	https://wallpapers.com/images/featured/virat-kohli-pictures-yc8dfpcjssp3s4se.jpg"
            rounded
            width={"80%"}
            height={200}
          />
        </Col>
        <Col sm={4}>
          <Image
            src="https://wallpapers.com/images/featured/virat-kohli-pictures-yc8dfpcjssp3s4se.jpg"
            rounded
            width={"80%"}
            height={200}
          />
        </Col>
        <Col sm={4}>
          <Image
            src="https://wallpapers.com/images/featured/virat-kohli-pictures-yc8dfpcjssp3s4se.jpg"
            rounded
            width={"80%"}
            height={200}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
