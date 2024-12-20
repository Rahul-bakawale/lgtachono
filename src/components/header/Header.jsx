import React from "react";
import { Col, Image, Nav, Navbar, Row } from "react-bootstrap";
import logo from "../../assets/images/logo.svg";

export const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="">
        <Row className=" w-100">
          <Col lg={4} className="d-flex justify-content-start">
            <Navbar.Brand href="#home">
              <Image src={logo} fluid />
            </Navbar.Brand>
          </Col>
          <Col lg={4} className="d-flex justify-content-center">
            <Navbar.Collapse>
              <Nav className="d-flex gap-3">
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">Advertise</Nav.Link>
                <Nav.Link href="#pricing">Supports</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
          <Col lg={4} className="d-flex justify-content-end">
            <Nav>
              <Nav.Link
                href="#deets"
                style={{
                  fontFamily: "DM Sans",
                  fontSize: "16px",
                  letterSpacing: "-0.16px",
                  textAlign: "left",
                  color: "rgba(239, 158, 72, 1)",
                  backgroundColor: "rgba(252, 242, 232, 1))",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  border: "1px  rgba(239, 158, 72, 0.8)",
                  display: "inline-block",
                }}
              >
                Try For Free
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Navbar>
    </>
  );
};
