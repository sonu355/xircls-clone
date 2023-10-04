import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom'

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
            <Nav.Item style={{ marginRight: "20px" }} >
              <Link to='/'>Home</Link>
            </Nav.Item>
            <Nav.Item>
              <Dropdown>
                <Dropdown.Toggle
                  as="span"
                  id="about-us-dropdown"
                  style={{ marginRight: "20px" }}
                >
                  <Link to='/about'>About Us</Link>
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
            <Nav.Item style={{ marginRight:'20px'}}>
                  <Link to='/signup'>Sign Up</Link>
            </Nav.Item>
            <Nav.Item style={{ marginRight: "20px" }}>
                  <Link to='/login'>Login</Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>

    </>
  );
};

export default NavbarThing;





      
     