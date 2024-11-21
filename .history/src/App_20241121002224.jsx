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
          <Row
          // style={{
          //   height: "1000px",
          //   width: "1234px",
          //   background:
          //     "linear-gradient(to bottom, rgba(224, 245, 250, 1), rgba(255, 253, 230, 1))",
          // }}
          >
            <p>
              <div
                id="myRatingResettable"
                data-coreui-toggle="rating"
                data-coreui-value="3"
              ></div>
              {/* Trused by over 4,332 students */}
            </p>
            <Col
              style={{
                fontSize: "85px",
                lineHeight: "100px",
                color: "linear-gradient(rgba(2, 7, 2, 1))",
              }}
            >
              {/* Learn Design with Nia Matos */}
            </Col>
            <Col>
              {/* <p>
                Get your blood tests delivered at let home collect sample from
                the victory of the managments that supplies best design system
                guidelines ever.
              </p> */}
            </Col>
            <Col>
              <Image
                src={dashImg}
                style={{
                  width: "575px",
                  height: "710px",
                  marginRight: "70px",
                  marginTop: "70px",
                }}
              />
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
