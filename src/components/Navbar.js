import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const Logo = require("../asset/logo.png");

const NavbarThing = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <img
            src={Logo}
            alt={Logo}
            width="240"
            height="90"
            className="d-inline-block align-top"
          />
          <Nav className="ml-auto">
            <Nav.Item style={{ marginRight: "20px" }} href="/">
              Home
            </Nav.Item>
            <Nav.Item>
              <Dropdown>
                <Dropdown.Toggle
                  as="span"
                  id="about-us-dropdown"
                  style={{ marginRight: "20px" }}
                >
                  About Us
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/">Why Xircls</Dropdown.Item>
                  <Dropdown.Item href="#about-us/history">
                    Why Collaborative Marketing
                  </Dropdown.Item>
                  <Dropdown.Item href="#about-us/history">
                    Vision and Mission
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>
            <Nav.Item>
              <Dropdown>
                <Dropdown.Toggle
                  as="span"
                  id="about-us-dropdown"
                  style={{ marginRight: "20px" }}
                >
                  Products
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#about-us/team">INFINITI</Dropdown.Item>
                  <Dropdown.Item href="#about-us/history">
                    SEMPER FI
                  </Dropdown.Item>
                  <Dropdown.Item href="#about-us/history">SNIPER</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>
            <Nav.Item href="#pricing" style={{ marginRight: "20px" }}>
              Blog
            </Nav.Item>
            <Nav.Item href="#pricing" style={{ marginRight: "20px" }}>
              Team
            </Nav.Item>
            <Nav.Item>
              <Dropdown>
                <Dropdown.Toggle
                  as="span"
                  id="about-us-dropdown"
                  style={{ marginRight: "20px" }}
                >
                  Sign Up
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#about-us/team">MERCHANT</Dropdown.Item>
                  <Dropdown.Item href="#about-us/history">
                    INFLUENCER
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>
            <Nav.Item>
              <Dropdown>
                <Dropdown.Toggle
                  as="span"
                  id="about-us-dropdown"
                  style={{ marginRight: "20px" }}
                >
                  Login
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#about-us/team">MERCHANT</Dropdown.Item>
                  <Dropdown.Item href="#about-us/history">
                    EMPLOYEE
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarThing;
