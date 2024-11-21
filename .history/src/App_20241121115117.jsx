import {
  Card,
  Col,
  Container,
  Form,
  FormControl,
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
import TutorialSection from "./components/tutorials/TutorialSection";
import Pattern from "./assets/images/patterns.svg";
import Frame from "./assets/images/Frame.svg";
import SearchIcon from "./assets/images/search.svg";

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
              <Col className="mt-5">
                <Card style={{ width: "37rem", textAlign: "justify" }}>
                  <Card.Body style={{ textAline: "justify" }}>
                    <Card.Text
                      style={{
                        font: "Heebo",
                        fontSize: "15px",
                        lineHeight: "30px",
                        color: "rgba(2, 7, 62, 1)",
                      }}
                    >
                      Trused by over 4,332 students
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
                <Row mt="10" style={{ marginTop: "35px" }}>
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
                  style={{
                    // backgroundImage: `url(${require("./assets/images/pp.jpg")})`,
                    // backgroundSize: "cover",
                    // backgroundRepeat: "no-repeat",
                    // minWidth: "410px",
                    border: "1px solid red",
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
                </div>
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
