import {
  Card,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Row,
} from "react-bootstrap";
import "./App.css";
import { Header } from "./components/header";
import dashImg from "./assets/images/videosDash.jpg";
import PaypalIcon from "./assets/images/paypal.svg";
import GoogleIcon from "./assets/images/google.svg";
import DropBoxIcon from "./assets/images/Dropbox_logo_2017.svg";
import Frame from "./assets/images/Frame.svg";
import SearchIcon from "./assets/images/search.svg";
import StarRating from "./components/card/StartRatting";
import Footer from "./components/footer/Footer";
import CourseSteps from "./components/coursesteps/CourseSteps";
import PopularCourseList from "./components/popularcourseList/PopularCourseList";
import CourseFeaturesList from "./components/coursefeaturesList/CourseFeatureList";
import TutorialList from "./components/tutorialsList/TutorialList";
import PricingPlanList from "./components/pricingplanlist/PricingPlanList";
import { useState } from "react";
import testVideo from "./assets/images/SampleVideo_1280x720_10mb.mp4";
function App() {
  const [showVideo, setShowVideo] = useState(false);

  const handleImageClick = () => {
    setShowVideo(true); // Change state to show video
  };
  return (
    <>
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
            <Row mt="20">
              <Col className="mt-5">
                <Card
                  style={{
                    width: "37rem",
                    textAlign: "justify",
                    backgroundColor: "transparent",
                    border: "0px",
                  }}
                >
                  <Card.Body style={{ textAline: "justify" }}>
                    <Card.Text
                      style={{
                        font: "Heebo",
                        fontSize: "15px",
                        lineHeight: "30px",
                        color: "rgba(2, 7, 62, 1)",
                      }}
                    >
                      <div style={{ display: "flex" }}>
                        <StarRating starColor="Black" />
                        <p style={{ paddingLeft: "10px", paddingTop: "3px" }}>
                          Trused by over 4,332 students
                        </p>
                      </div>
                    </Card.Text>
                    <Card.Subtitle
                      className="mb-2"
                      style={{
                        font: "DM Sans",
                        fontSize: "55px",
                        lineHeight: "100x",
                        color: "rgba(2, 7, 62, 1)",
                      }}
                    >
                      Learn Design <br />
                      with Nia Matos
                    </Card.Subtitle>

                    <Image
                      src={Frame}
                      style={{
                        width: "248px",
                        marginLeft: "130px",
                        marginBottom: "15px",
                      }}
                    />
                    <Card.Text
                      style={{
                        font: "DM Sans",
                        fontSize: "18px",
                        lineHeight: "40px",
                        color: "rgba(2, 7, 62, 1)",
                      }}
                    >
                      <span>
                        {" "}
                        Get your blood tests delivered at let home collect
                        sample <br />
                        from the victory of the managments that supplies best
                        <br />
                        design system guidelines ever
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Col>
                  <InputGroup
                    className="mt-4"
                    style={{ width: "520px", height: "70px" }}
                  >
                    <Form.Control
                      type="text"
                      placeholder="Search Course Name"
                      style={{
                        height: "70px",
                        font: "DM Sans",
                        fontSize: "17px",
                        lineHeight: "40px",
                        color: "rgba(2, 7, 62, 1)",
                      }}
                    />
                    <Image
                      src={SearchIcon}
                      alt="Search Icon"
                      style={{
                        width: "18px",
                        height: "25px",
                        position: "relative",
                        right: "62px",
                        top: "23px",
                      }}
                    />
                  </InputGroup>
                </Col>
                <Row mt="10" style={{ margin: "35px 152px 0 0" }}>
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
                  className=""
                  style={
                    {
                      // border: "1px solid red",
                    }
                  }
                >
                  {/* <Image
                    src={dashImg}
                    style={{
                      width: "575px",
                      height: "710px",
                      marginRight: "55px",
                      marginTop: "70px",
                    }}
                  /> */}
                  {!showVideo ? (
                    <img
                      src={dashImg}
                      alt="Clickable"
                      style={{
                        width: "575px",
                        height: "710px",
                        marginRight: "55px",
                        marginTop: "70px",
                        cursor: "pointer",
                        backgroundColor: "transparent",
                      }}
                      onClick={handleImageClick}
                    />
                  ) : (
                    <div
                      style={{
                        width: "575px",
                        height: "710px",
                        marginTop: "70px",
                      }}
                    >
                      <video
                        width="100%"
                        height="100%"
                        controls
                        autoPlay
                        style={{ borderRadius: "10px" }}
                      >
                        <source src={testVideo} type="video/mp4" /> Your browser
                        does not support the video tag.
                      </video>
                    </div>
                  )}
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </Container>
      <TutorialList />
      <CourseFeaturesList />
      <PopularCourseList />
      <CourseSteps />
      <Footer />
      <PricingPlanList />
    </>
  );
}

export default App;
