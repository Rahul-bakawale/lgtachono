import { Col, Container, Image, Row } from "react-bootstrap";
import "./App.css";
import { Header } from "./components/header";
import dashImg from "./assets/images/videosDash.jpg";

function App() {
  return (
    <Container fluid className="App" style={{ backgroundColor: "red" }}>
      <Container style={{ backgroundColor: "yellow" }}>
        <Header />
        <div
          style={{
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <Row style={{ height: "1000px", backgroundColor: "rgba(224, 24,)" }}>
            <Col>Lorem Design with Nia Matos</Col>
            <Col>
              <Image src={dashImg} style={{ height: "575px" }} />
            </Col>
          </Row>
        </div>
        <div>
          <Row style={{ height: "1000px", backgroundColor: "" }}>
            <Col>Card</Col>
            <Col>Card-2</Col>
            <Col>Card-3</Col>
          </Row>
        </div>
        <div>
          <Row style={{ height: "1000px", backgroundColor: "purple" }}>
            <Col>Card</Col>
            <Col>Card-2</Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
}

export default App;
