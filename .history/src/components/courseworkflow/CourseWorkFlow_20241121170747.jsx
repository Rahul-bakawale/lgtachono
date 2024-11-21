import React from "react";

const CourseWorkFlow = () => {
  return (
    <Container>
      {/* Title Row */}
      <Row className="text-center mb-4">
        <h2>Let’s see how it works</h2>
      </Row>

      {/* Main Row with Steps */}
      <Row className="justify-content-center">
        {/* Step 1 */}
        <Col lg={3} className="mb-4">
          <Row className="d-flex align-items-center justify-content-center mb-2">
            <Col lg={4} className="d-flex justify-content-center">
              <Image src={Number1} fluid />
            </Col>
            <Col lg={8} className="d-flex justify-content-center">
              <Image src={ArrowImg11} fluid />
            </Col>
          </Row>
          <Row className="text-center">
            <p>Step Description 1</p>
          </Row>
        </Col>

        {/* Step 2 */}
        <Col lg={3} className="mb-4">
          <Row className="d-flex align-items-center justify-content-center mb-2">
            <Col lg={4} className="d-flex justify-content-center">
              <Image src={Number4} fluid />
            </Col>
            <Col lg={8} className="d-flex justify-content-center">
              <Image src={ArrowImg1} fluid />
            </Col>
          </Row>
          <Row className="d-flex justify-content-start">
            <p>Step Description 2</p>
          </Row>
        </Col>

        {/* Step 3 */}
        <Col lg={3} className="mb-4">
          <Row className="d-flex align-items-center justify-content-center mb-2">
            <Col lg={4} className="d-flex justify-content-center">
              <Image src={Number2} fluid />
            </Col>
            <Col lg={8} className="d-flex justify-content-center">
              <Image src={ArrowImg11} fluid />
            </Col>
          </Row>
          <Row className="d-flex justify-content-start">
            <p>Step Description 3</p>
          </Row>
        </Col>

        {/* Step 4 */}
        <Col lg={3} className="mb-4">
          <Row className="d-flex align-items-center justify-content-start mb-2">
            <Col lg={4} style={{ paddingRight: "10px" }}>
              <Image src={Number3} fluid />
            </Col>
          </Row>
          <Row className="d-flex justify-content-start">
            <p>Step Description 4</p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CourseWorkFlow;
