import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CustomCard from "../card/CustomCard";

const TutorialSection = () => {
  const handleButtonClick = () => {};
  return (
    <>
      <Container>
        <Row>
          <Row>
            <Care></Care>
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
