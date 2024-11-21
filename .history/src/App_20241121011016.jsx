import { Col, Container, Image, Row } from "react-bootstrap";
import "./App.css";
import { Header } from "./components/header";
import dashImg from "./assets/images/videosDash.jpg";
import pattern from "./assets/images/pattern.svg";
import { useRef, useState } from "react";

function App() {
  const [isVideoVisible, setVideoVisible] = useState(false); // State to toggle video visibility
  const videoRef = useRef(null); // Reference to control the video

  const handleImageClick = () => {
    setVideoVisible(true); // Show the video
    if (videoRef.current) {
      videoRef.current.play(); // Play the video
    }
  };
  return (
    <Container
      fluid
      className="App"
      style={{
        background:
          "linear-gradient(to right, rgba(224, 245, 250, 1), rgba(255, 253, 230, 1))",
      }}
    >
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
          <Row>
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
              <div className="dhdh">
                <Image
                  src={dashImg}
                  style={{
                    width: "575px",
                    height: "710px",
                    marginRight: "55px",
                    marginTop: "70px",
                  }}
                />
                <Image
                  src={pattern}
                  style={
                    {
                      // width: "575px",
                      // height: "710px",
                      // marginRight: "55px",
                      // marginTop: "70px",
                    }
                  }
                />
              </div>
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
