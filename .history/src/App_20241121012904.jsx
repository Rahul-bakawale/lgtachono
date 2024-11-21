import { Col, Container, Image, Row } from "react-bootstrap";
import "./App.css";
import { Header } from "./components/header";
import dashImg from "./assets/images/videosDash.jpg";
import pattern from "./assets/images/pattern.svg";

function App() {
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
            {/* <Col>
              <div
                className=""
                style={{
                  backgroundImage: `url(${require("./assets/images/pattern (2).jpg")})`,
                  // backgroundSize: "cover",
                  // backgroundRepeat: "no-repeat",
                }}
              >
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
            </Col> */}
            <Col>
              <div
                className=""
                style={{
                  backgroundImage: `url(${require("./assets/images/pattern (2).jpg")})`,
                  backgroundSize: "cover", // Ensure the background image covers the entire div
                  backgroundRepeat: "no-repeat", // Avoid repeating the background image
                  position: "relative", // This allows positioning of child elements
                  height: "100%", // Ensure the div takes up available space
                }}
              >
                <Image
                  src={dashImg}
                  style={{
                    width: "575px",
                    height: "710px",
                    marginRight: "55px",
                    marginTop: "70px",
                    position: "absolute", // Position the dash image over the background
                    zIndex: 2, // Ensure the dash image is on top
                  }}
                />
                <Image
                  src={pattern}
                  style={{
                    width: "100%", // You can adjust the size or leave it to cover the container
                    height: "auto", // Adjust the height if necessary
                    position: "absolute", // Position the pattern image over the background
                    zIndex: 1, // Ensure the pattern image stays below the dash image
                  }}
                />
              </div>
            </Col>
          </Row>
        </div>
        {/* <div>
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
        </div> */}
      </Container>
    </Container>
  );
}

export default App;
