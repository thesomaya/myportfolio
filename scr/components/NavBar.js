import BorderColorIcon from "@material-ui/icons/BorderColor";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../styles/NavBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <Navbar fixed="top" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Somaia Mohamed</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#intro">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="mailto:somaia.mdh@gmail.com">
                <EmailRoundedIcon style={{ fontSize: 20 }}></EmailRoundedIcon>
              </Nav.Link>
              <Nav.Link href="https://github.com/thesomaya" target="_blank">
                <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
              </Nav.Link>
              <Nav.Link href="https://www.linkedin.com/in/somaiashaaban/" target="_blank">
                <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
              </Nav.Link>
              <Nav.Link href="https://medium.com/@somaia.mdh" target="_blank">
                <BorderColorIcon style={{ fontSize: 20 }}></BorderColorIcon>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavBar;
