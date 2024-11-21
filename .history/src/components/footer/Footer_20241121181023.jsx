import React from "react";
import { Card, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <Container>
        <Row>
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
                  Get your blood tests delivered at let home collect sample{" "}
                  <br />
                  from the victory of the managments that supplies best
                  <br />
                  design system guidelines ever
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
