import React from "react";
import ArrowImg11 from "../../assets/images/arrow11.jpg";
import ArrowImg1 from "../../assets/images/arrow2.jpg";
import Number1 from "../../assets/images/Group.png";
import Number2 from "../../assets/images/Group (2).png";
import Number3 from "../../assets/images/Group (3).png";
import Number4 from "../../assets/images/Group (1).png";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
const CourseWorkFlow = () => {
  return (
    <Container
      style={{
        marginTop: "5rem",

        background: "linear-gradient(180deg, #EBF9FF 0%, #F6F6FF 100%)",
        // 'linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 253, 230, 1))',
      }}
    >
      {/* Title Row */}
      <Row className="text-center mb-4">
        <Card
          style={{
            textAlign: "justify",
            backgroundColor: "transparent",
            border: "0px",
            marginTop: "5rem",
          }}
        >
          <Card.Body>
            <Card.Text
              style={{
                textAlign: "center",
                font: "DM Sans",
                fontSize: "24px",
                color: "rgba(239, 158, 72, 1)",
              }}
            >
              Whats the function{" "}
            </Card.Text>
            <Card.Text
              style={{
                textAlign: "center",
                font: "DM Sans",
                fontSize: "37px",
                fontWeight: "700",
                color: "rgba(15, 33, 55, 1)",
              }}
            >
              Let’s see how it works{" "}
            </Card.Text>
          </Card.Body>
        </Card>{" "}
      </Row>
      {/* Main Row with Steps */}
      <Row className="justify-content-center">
        {/* Step 1 */}
        <Col lg={3} className="mb-4">
          <Row className="d-flex align-items-center justify-content-center mb-2">
            <Col lg={4} className="d-flex justify-content-center">
              <Image src={Number1} fluid />
            </Col>
            <Col lg={8} className="d-flex justify-content-center">
              <Image src={ArrowImg11} fluid />
            </Col>
          </Row>
          <Row className="text-center">
            <Card.Body>
              <Card.Title
                style={{
                  font: "DM Sans",
                  fontSize: "20px",
                  lineHeight: "30px",
                  color: "rgba(15, 33, 55, 1)",
                }}
              >
                {"title"}
              </Card.Title>

              {/* Subtitle */}
              <Card.Text
                style={{
                  font: "DM Sans",
                  fontSize: "16px",
                  lineHeight: "24px",
                  color: "rgba(52, 61, 72, 1)",
                }}
              >
                {"subTitle"}
              </Card.Text>
            </Card.Body>
          </Row>
        </Col>

        {/* Step 2 */}
        <Col lg={3} className="mb-4">
          <Row className="d-flex align-items-center justify-content-center mb-2">
            <Col lg={4} className="d-flex justify-content-center">
              <Image src={Number4} fluid />
            </Col>
            <Col lg={8} className="d-flex justify-content-center">
              <Image src={ArrowImg1} fluid />
            </Col>
          </Row>
          <Row className="d-flex justify-content-start">
            <p>Step Description 2</p>
          </Row>
        </Col>

        {/* Step 3 */}
        <Col lg={3} className="mb-4">
          <Row className="d-flex align-items-center justify-content-center mb-2">
            <Col lg={4} className="d-flex justify-content-center">
              <Image src={Number2} fluid />
            </Col>
            <Col lg={8} className="d-flex justify-content-center">
              <Image src={ArrowImg11} fluid />
            </Col>
          </Row>
          <Row className="d-flex justify-content-start">
            <p>Step Description 3</p>
          </Row>
        </Col>

        {/* Step 4 */}
        <Col lg={3} className="mb-4">
          <Row className="d-flex align-items-center justify-content-start mb-2">
            <Col lg={4} style={{ paddingRight: "10px" }}>
              <Image src={Number3} fluid />
            </Col>
          </Row>
          <Row className="d-flex justify-content-start">
            <p>Step Description 4</p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CourseWorkFlow;
