import React from "react";
import Slider from "react-slick";
import { Card, Container } from "react-bootstrap";
import CustomCard from "../card/CustomCard";
import img1 from "../../assets/images/image (1).svg";
import img2 from "../../assets/images/image(2s).svg";
import img3 from "../../assets/images/image (3).svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TutorialList = () => {
  const products = [
    {
      title: "How to work with prototype design with adobe xd featuring tools",
      rating: 0.5,
      review: 392,
      imgSrc: img1,
      watchedStudent: "2,538",
    },
    {
      title: "How to work with prototype design with adobe xd featuring tools",
      rating: 0.5,
      review: 392,
      imgSrc: img2,
      watchedStudent: "3,532",
    },
    {
      title: "How to work with prototype design with adobe xd featuring tools",
      rating: 0.5,
      review: 392,
      imgSrc: img3,
      watchedStudent: "1,037",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerPadding: "20px",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
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

      <Slider {...sliderSettings} style={{ paddingTop: "4rem" }}>
        {products.map((item, index) => (
          <div key={index} style={{ margin: "100px" }}>
            <CustomCard
              title={item.title}
              rating={item.rating}
              imgSrc={item.imgSrc}
              review={item.review}
              watchedStudent={item.watchedStudent}
              customClass="featured-card"
            />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default TutorialList;
