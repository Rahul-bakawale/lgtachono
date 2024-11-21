import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import CustomCard from "../card/CustomCard";

const TutorialSection = () => {
  const handleButtonClick = () => {};

  const products = [
    {
      title: "How to work with prototype design with adobe xd featuring tools",
      rating: 0.5,
      review: 392,
      imgSrc: "https://via.placeholder.com/150",
    },
    {
      title: "Product 2",
      rating: 4.0,
      subTitle: "Good quality, value for money",
      imgSrc: "https://via.placeholder.com/150",
      buttonText: "Buy Now",
      buttonVariant: "primary",
      customClass: "featured-card",
      starColor: "yellow",
    },
    {
      title: "Product 3",
      rating: 5.0,
      subTitle: "Excellent product for everyday use",
      imgSrc: "https://via.placeholder.com/150",
      buttonText: "Buy Now",
      buttonVariant: "primary",
      customClass: "featured-card",
      starColor: "yellow",
    },
  ];

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
            {products.map((item) => {
              return (
                <Col lg={4}>
                  {" "}
                  <CustomCard
                    title={item.title}
                    rating={item.rating}
                    subTitle="Great product for daily use"
                    imgSrc={item.imgSrc}
                    buttonText="Buy Now"
                    buttonVariant="primary"
                    onButtonClick={handleButtonClick}
                    customClass="featured-card"
                  />
                </Col>
              );
            })}
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default TutorialSection;
