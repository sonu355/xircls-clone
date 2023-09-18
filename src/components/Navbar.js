import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Logo = require('../asset/logo.png')

const NavbarThing = () =>{
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <img 
            src={Logo} alt={Logo}
            width="240"
            height="90"
            className="d-inline-block align-top"
          />
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Dropdown>
              <Dropdown.Toggle as='span' id="about-us-dropdown">
                About Us
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#about-us/team">Why Xircls</Dropdown.Item>
                <Dropdown.Item href="#about-us/history">Why Collaborative Marketing</Dropdown.Item>
                <Dropdown.Item href="#about-us/history">Vision and Mission</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle as='span' id="about-us-dropdown">
                Products
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#about-us/team">INFINITI</Dropdown.Item>
                <Dropdown.Item href="#about-us/history">SEMPER FI</Dropdown.Item>
                <Dropdown.Item href="#about-us/history">SNIPER</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <Nav.Link href="#pricing">Team</Nav.Link>
            <Dropdown>
              <Dropdown.Toggle as='span' id="about-us-dropdown">
                Sign Up
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#about-us/team">MERCHANT</Dropdown.Item>
                <Dropdown.Item href="#about-us/history">INFLUENCER</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle as='span' id="about-us-dropdown">
                Login
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#about-us/team">MERCHANT</Dropdown.Item>
                <Dropdown.Item href="#about-us/history">EMPLOYEE</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarThing;
