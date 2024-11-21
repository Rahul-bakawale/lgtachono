import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import icon from "../../assets/images/plus.jpg";

const Footer = () => {
  const cardContent = [
    {
      title: "How to contact with riders emergency?",
      subtitle: "",
    },
    {
      title: "App installation failed, how to update system information?",
      subtitle: "",
    },
    {
      title: "Website response taking time, how to improve?",
      subtitle:
        "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally to provide information.",
    },
    {
      title: "New update fixed all bug and issues",
      subtitle: "",
    },
  ];

  return (
    <Container>
      <Row className="d-flex align-items-center justify-content-start mb-2">
        <Row>
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
                Frequent Question{" "}
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
                Do you have any question{" "}
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <Card
          style={{
            width: "37rem",
            textAlign: "justify",
            backgroundColor: "transparent",
            border: "0px",
          }}
        >
          <Card.Body style={{ textAlign: "justify" }}>
            {/* Iterate over cardContent array and display title and subtitle */}
            {cardContent.map((content, index) => (
              <div key={index}>
                <Card.Subtitle
                  className="mb-2"
                  style={{
                    font: "DM Sans",
                    fontSize: "20px",
                    lineHeight: "70px",
                    color: "rgba(15, 33, 55, 1)",
                    borderBottom: "1px solid rgba(15, 33, 55, 0.2)", // Add border to subtitle
                    padding: "10px",
                    marginBottom: "10px",
                    cursor: "pointer", // Cursor pointer for hover effect
                    display: "flex",
                    alignItems: "center",
                    width: "1000px",
                    transition: "background-color 0.3s ease", // Smooth background change on hover
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = "transparent";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                  }}
                >
                  <Image
                    src={icon}
                    style={{
                      font: "DM Sans",
                      lineHeight: "40px",
                      marginRight: "10px",
                      fontSize: "17px",
                      fontWeight: 400,
                    }}
                  />
                  {content.title ? content.title : ""}
                </Card.Subtitle>

                {index === 2 && (
                  <Card.Text
                    style={{
                      font: "DM Sans",
                      fontSize: "12px",
                      lineHeight: "30px",
                      color: "rgba(15, 33, 55, 1)",
                    }}
                  >
                    <span>{content.subtitle ? content.subtitle : ""}</span>
                  </Card.Text>
                )}
              </div>
            ))}
          </Card.Body>
        </Card>
      </Row>
      <Row className="d-flex align-items-center justify-content-start mb-2">
        <Row>
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
                  fontSize: "50px",
                  lineHeight: "55px",

                  fontWeight: "700",
                  color: "rgba(15, 33, 55, 1)",
                }}
              >
                Ready to learn design
                <br /> with Nia Matos{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
            }}
          >
            <Button
              style={{
                fontFamily: "DM Sans",
                width: "205px",
                fontSize: "16px",
                letterSpacing: "-0.16px",
                textAlign: "center",
                color: "rgba(239, 158, 72, 1)",
                backgroundColor: "rgba(239, 158, 72, 0.1)",
                padding: "10px 20px",
                borderRadius: "8px",
                border: "1px  rgba(239, 158, 72, 0.8)",
              }}
            >
              Start Learning Today
            </Button>
          </Row>
        </Row>
      </Row>

      <Row>
        <Col lg={3}>
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </Col>
        <Col lg={3}>
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </Col>
        <Col lg={3}>
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </Col>
        <Col lg={3}>
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
