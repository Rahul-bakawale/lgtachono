import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import PopularCardSection from "../card/PopularCardsContainer";

const PopularCourse = () => {
  return (
    <>
      <Container>
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
                Popular Designing Course{" "}
              </Card.Text>
            </Card.Body>
          </Card>
          <PopularCardSection
            title="React Basics"
            subTitle="Learn the fundamentals of React.js"
            additionalText="This course is suitable for beginners."
                      imgSrc={ }
            watchedStudent={1234}
            buttonLabel="Enroll Now"
            onButtonClick={() => alert("Button Clicked!")} // Example handler
          />
        </Row>
      </Container>
    </>
  );
};

export default PopularCourse;
