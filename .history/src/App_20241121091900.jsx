import { Col, Container, Image, Row } from "react-bootstrap";
import "./App.css";
import { Header } from "./components/header";
import dashImg from "./assets/images/videosDash.jpg";
import PaypalIcon from "./assets/images/paypal.svg";
import GoogleIcon from "./assets/images/google.svg";
import DropBoxIcon from "./assets/images/Dropbox_logo_2017.svg";
import TutorialSection from "./components/tutorials/TutorialSection";
import Pattern from "./assets/images/patterns.svg";
function App() {
  return (
    <>
      <Container
        fluid
        className="App"
        style={{
          background:
            "linear-gradient(to right, rgba(224, 245, 250, 1), rgba(255, 253, 230, 1))",
          // 'linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 253, 230, 1))',
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
            <Row mt="20">
              <Col>
                <div data-coreui-toggle="rating" data-coreui-value="3"></div>{" "}
                Trused by over 4,332 students{" "}
                <Col
                // style={{
                //   fontSize: "85px",
                //   lineHeight: "100px",
                //   color: "linear-gradient(rgba(2, 7, 2, 1))",
                // }}
                >
                  Learn Design with Nia Matos
                </Col>
                <Col>
                  <p>
                    Get your blood tests delivered at let home collect sample
                    from the victory of the managments that supplies best design
                    system guidelines ever.
                  </p>
                </Col>
                <Col>Search</Col>
                <Row>
                  <Col>
                    <p>Sponsored:</p>
                  </Col>
                  <Col>
                    <Image src={PaypalIcon} />
                  </Col>
                  <Col>
                    {" "}
                    <Image src={GoogleIcon} />
                  </Col>
                  <Col>
                    <Image src={DropBoxIcon} />
                  </Col>
                </Row>
              </Col>

              <Col>
                <div
                  style={{
                    border: "1px solid red",
                    position: "relative",
                    width: "575px",
                    height: "710px",
                    marginRight: "55px",
                    marginTop: "70px",
                    backgroundImage: `url(${Pattern})`, // Set the Pattern as the background
                    backgroundSize: "cover", // Adjust how the image fits
                    backgroundPosition: "center", // Center the image
                    backgroundRepeat: "no-repeat", // Prevent repetition
                  }}
                >
                  {/* Foreground dash image */}
                  <Image
                    src={dashImg}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>

                {/* <div
                // className=""
                // style={{
                //   backgroundImage: `url(${require("./assets/images/pp.jpg")})`,
                //   backgroundSize: "cover",
                //   backgroundRepeat: "no-repeat",
                //   minWidth: "410px",
                // }}
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
                    src={dashImg}
                    style={{
                      width: "575px",
                      height: "710px",
                      marginRight: "55px",
                      marginTop: "70px",
                    }}
                  />
                </div> */}
              </Col>
            </Row>
          </div>
        </Container>
      </Container>
      <TutorialSection />
    </>
  );
}

export default App;
