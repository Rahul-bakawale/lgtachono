import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CustomCard from "../card/CustomCard";

const TutorialSection = () => {
  const handleButtonClick = () => {};
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
                marginTop: "3rem",
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
                  Quality features
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
                  Tutorials that people love most
                </Card.Text>
              </Card.Body>
            </Card>
          </Row>
          <Row>
            <Col lg={4}>
              {" "}
              <CustomCard
                title="Product 1"
                rating="4.5/5"
                subTitle="Great product for daily use"
                imgSrc="https://via.placeholder.com/150"
                buttonText="Buy Now"
                buttonVariant="primary"
                onButtonClick={handleButtonClick}
                customClass="featured-card" // Optional custom CSS class
              />
            </Col>
            <Col lg={4}>
              {" "}
              <CustomCard
                title="Product 1"
                rating="4.5/5"
                subTitle="Great product for daily use"
                imgSrc="https://via.placeholder.com/150"
                buttonText="Buy Now"
                buttonVariant="primary"
                onButtonClick={handleButtonClick}
                customClass="featured-card" // Optional custom CSS class
              />
            </Col>
            <Col lg={4}>
              {" "}
              <CustomCard
                title="Product 1"
                rating="4.5/5"
                subTitle="Great product for daily use"
                imgSrc="https://via.placeholder.com/150"
                buttonText="Buy Now"
                buttonVariant="primary"
                onButtonClick={handleButtonClick}
                customClass="featured-card" // Optional custom CSS class
              />
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default TutorialSection;
