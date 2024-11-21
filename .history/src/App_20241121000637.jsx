import { Col, Container, Image, Row } from "react-bootstrap";
import "./App.css";
import { Header } from "./components/header";
import dashImg from "./assets/images/videosDash.jpg";

function App() {
  return (
    <Container fluid className="App">
      <Container>
        <Header />
        <div
          style={{
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <div
            data-coreui-allow-clear="true"
            data-coreui-toggle="rating"
            data-coreui-value="3"
          ></div>{" "}
          <p>
            <div
              data-coreui-allow-clear="true"
              data-coreui-toggle="rating"
              data-coreui-value="3"
            ></div>{" "}
            Trused by over 4,332 students
          </p>
          <Row
            style={{
              height: "1000px",
              width: "1234px",
              background:
                "linear-gradient(to bottom, rgba(224, 245, 250, 1), rgba(255, 253, 230, 1))",
            }}
          >
            <Col
              style={{
                fontSize: "85px",
                lineHeight: "100px",
                color: "linear-gradient(rgba(2, 7, 2, 1))",
              }}
            >
              Learn Design with Nia Matos
            </Col>
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
