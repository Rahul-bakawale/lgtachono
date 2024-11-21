import React from "react";
import { Card, Container, Row } from "react-bootstrap";
import PopularCardSection from "../card/PopularCardsContainer";
import Play from "../../assets/images/play.svg";
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
            title="Professional graphic design tutorial full course with exercise file"
            subTitle="Get your tutorials delivered at let home collect sample from the victory of the managments."
            additionalText="This course is suitable for beginners."
            imgSrc={"Play"}
            buttonLabel="7 Video Classes / 4 hrs"
          />
          <PopularCardSection
            title="Professional graphic design tutorial full course with exercise file"
            subTitle="Get your tutorials delivered at let home collect sample from the victory of the managments."
            additionalText="This course is suitable for beginners."
            imgSrc={"Play"}
            buttonLabel="7 Video Classes / 4 hrs"
          />
          <PopularCardSection
            title="Professional graphic design tutorial full course with exercise file"
            subTitle="Get your tutorials delivered at let home collect sample from the victory of the managments."
            additionalText="This course is suitable for beginners."
            imgSrc={"Play"}
            buttonLabel="7 Video Classes / 4 hrs"
          />
          <PopularCardSection
            title="Professional graphic design tutorial full course with exercise file"
            subTitle="Get your tutorials delivered at let home collect sample from the victory of the managments."
            additionalText="This course is suitable for beginners."
            imgSrc={"Play"}
            buttonLabel="7 Video Classes / 4 hrs"
          />
        </Row>
      </Container>
    </>
  );
};

export default PopularCourse;
