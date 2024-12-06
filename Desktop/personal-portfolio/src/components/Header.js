import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import logo from '../assets/img/logo.png';

function Header() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        {/* Logo da marca */}
        <Navbar.Brand className="brand" href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="collapse" id="basic-navbar-nav">
          {/* Links de navegação */}
          <Nav className="nav-link">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Skills</Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                Enciclopedia
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Book</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Art Process
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Programming
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* Botão alinhado à direita */}
          <Button variant="dark" className="btn-right-header">
            Let's contact!
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
