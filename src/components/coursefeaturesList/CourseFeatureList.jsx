import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import image1 from "../../assets/images/80k.svg";
import image2 from "../../assets/images/150k.svg";
import image3 from "../../assets/images/90k.svg";
import image4 from "../../assets/images/30k.svg";
const CourseFeaturesList = () => {
  return (
    <>
      <Container
        style={{
          marginTop: "12rem",
          background:
            " linear-gradient(106.43deg, rgba(255, 253, 230, 0.35) -1.4%, rgba(255, 253, 230, 0.07) -1.39%, rgba(224, 239, 250, 0.35) 100.87%)",
        }}
      >
        <Row>
          <Col lg={6}>
            <Row>
              <Col lg={6}>
                <Image src={image1} width={400} />
              </Col>
              <Col lg={6}>
                <Image src={image2} width={400} />
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <Image src={image3} width={400} />
              </Col>
              <Col lg={6}>
                <Image src={image4} width={400} />
              </Col>
            </Row>
          </Col>
          <Col lg={6}>
            <Row>
              <Col>
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
                        color: "rgba(239, 158, 72, 1)",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "DM Sans",
                          fontSize: "16px",
                          letterSpacing: "-0.16px",
                          textAlign: "left",
                          color: "rgba(239, 158, 72, 1)",
                          backgroundColor: "rgba(239, 158, 72, 0.1)",
                          padding: "10px 20px",
                          borderRadius: "8px",
                          border: "1px solid rgba(239, 158, 72, 0.8)",
                          display: "inline-block",
                        }}
                      >
                        <p>Core features</p>
                      </div>
                    </Card.Text>
                    <Card.Subtitle
                      className="mb-2"
                      style={{
                        font: "DM Sans",
                        fontSize: "48px",
                        fontWeight: 700,
                        lineHeight: "55px",
                        color: "rgba(15, 33, 55, 1)",
                      }}
                    >
                      Smart Jackpots that you may love this anytime & anywhere
                    </Card.Subtitle>

                    <Card.Text
                      style={{
                        font: "DM Sans",
                        fontSize: "18px",
                        lineHeight: "40px",
                      }}
                    >
                      <span>
                        Get your tests delivered at let home collect sample
                        <br />
                        from the victory of the managments that supplies
                        <br /> best design system guidelines ever. Get your
                        tests
                        <br />
                        delivered at let home collect sample.
                      </span>
                    </Card.Text>
                    <Button
                      style={{
                        fontFamily: "DM Sans",
                        fontSize: "16px",
                        letterSpacing: "-0.16px",
                        textAlign: "left",
                        color: "rgba(239, 158, 72, 1)",
                        backgroundColor: "rgba(239, 158, 72, 0.1)",
                        padding: "10px 20px",
                        borderRadius: "8px",
                        border: "1px  rgba(239, 158, 72, 0.8)",
                        display: "inline-block",
                      }}
                    >
                      Explore details
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CourseFeaturesList;
