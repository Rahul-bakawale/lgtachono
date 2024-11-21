import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import image1 from "../../assets/images/80k.svg";
import image2 from "../../assets/images/150k.svg";
import image3 from "../../assets/images/90k.svg";
import image4 from "../../assets/images/30k.svg";
const index = () => {
  return (
    <>
      <Container>
        <Row>
          <Col></Col>
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
                    color: "rgba(2, 7, 62, 1)",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <p style={{ paddingLeft: "10px", paddingTop: "3px" }}>
                      Core features
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
                  Smart Jackpots that you may love this anytime & anywhere
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
                    Get your tests delivered at let home collect sample
                    <br />
                    from the victory of the managments that supplies best design
                    system guidelines ever. Get your tests delivered at let home
                    collect sample.
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default index;
