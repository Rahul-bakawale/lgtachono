import React from "react";
import { Col, Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import logo from "../../assets/images/logo.svg";

export const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Row className=" w-100">
          <Col lg={4} className="d-flex justify-content-start">
            <Navbar.Brand href="#home">
              <Image src={logo} fluid />
            </Navbar.Brand>
          </Col>
          <Col lg={4} className="justify-content-evenly">
            <Navbar.Collapse className="">
              {/* <Navbar.Collapse id="responsive-navbar-nav"> */}
              <Nav className="d-flex justify-content-center">
                <Nav.Link href="#features" className="px-2">
                  Home
                </Nav.Link>
                <Nav.Link href="#pricing" className="p-2">
                  Adversite
                </Nav.Link>
                <Nav.Link href="#pricing" className="p-2">
                  Supports
                </Nav.Link>
                <Nav.Link href="#pricing" className="p-2">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Col>
          <Col lg={4} className="d-flex justify-content-end">
            <Nav>
              <Nav.Link
                href="#deets",
                backgroundColor="linear-gradient(to bottom, rgba(224, 245, 250, 1), rgba(255, 253, 230, 1))"
              >
                Try For Free
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Navbar>
    </div>
  );
};
