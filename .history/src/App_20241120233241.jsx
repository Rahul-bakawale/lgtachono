import { Col, Container, Image, Row } from "react-bootstrap";
import "./App.css";
import { Header } from "./components/header";

function App() {
  return (
    <Container fluid className="App" style={{ backgroundColor: "red" }}>
      <Container style={{ backgroundColor: "yellow" }}>
        <Header />

        <Row>
          <Col>Lorem Design with Nia Matos</Col>
          <Col>fasdf</Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
