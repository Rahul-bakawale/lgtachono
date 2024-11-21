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
            padding: "paddingtop:20px",
            paddingbottom: "paddingtop:20px",
          }}
        >
          <Row style={{ height: "1000px", backgroundColor: "purple" }}>
            <Col>Lorem Design with Nia Matos</Col>
            <Col>
              <Image src={dashImg} style={{ height: "575px" }} />
            </Col>
          </Row>
        </div>
      </Container>
    </Container>
  );
}

export default App;
