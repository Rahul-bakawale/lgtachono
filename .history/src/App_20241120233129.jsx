import { Col, Container, Image, Row } from "react-bootstrap";
import "./App.css";
import { Header } from "./components/header";
import dashImg from "./assets/images/image (3).svg";

function App() {
  return (
    <Container fluid className="App" style={{ backgroundColor: "red" }}>
      <Container style={{ backgroundColor: "yellow" }}>
        <Header />

        <Row>
          <Col>Lorem Design with Nia Matos</Col>
          <Col>
            <Image src={dashImg} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
