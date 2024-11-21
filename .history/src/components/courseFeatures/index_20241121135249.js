import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import image1 from "../../assets/images/80k.svg";
import image2 from "../../assets/images/150k.svg";
import image3 from "../../assets/images/90k.svg";
import image4 from "../../assets/images/30k.svg";
const index = () => {
  return;
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
                Get your blood tests delivered at let home collect sample <br />
                from the victory of the managments that supplies best
                <br />
                design system guidelines ever
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>;
};

export default index;
