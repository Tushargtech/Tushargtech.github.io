import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import CarouselComponent from './Carouselcomponent';


const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img src="C:\Users\TUSHAR GARG\Desktop\javascript\react.js\ducat-app\src\assets\logo.png"alt="Ducat Logo" width="120" height="50" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <NavDropdown title="Courses" id="basic-nav-dropdown">
            <NavDropdown.Item as={NavLink} to="/courses/new-courses">New Courses</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/courses/java">Java</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/courses/.net">.NET</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/courses/python">Python</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/courses/software-testing">Software Testing</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/courses/web-designing">Web Designing - Full Stack Development</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/courses/programming-languages">Programming Languages</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/courses/cloud-computing">Cloud Computing</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/courses/salesforce">Salesforce</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/courses/cad-training">CAD Training</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/courses/mobile-app-dev">Mobile Application Development</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/courses/network-security">Network & Security</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/courses/digital-marketing">Digital Marketing</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/courses/mis-excel">MIS - Advanced Excel - BI Tools</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/courses/multimedia-animation">Multimedia Animation - Graphics</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/courses/erp">ERP</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/courses/industrial-training">Industrial Training</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/courses/microsoft-dynamic">Microsoft Dynamic</NavDropdown.Item>
            <NavDropdown.Item as={NavLink} to="/courses/others">Others</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={NavLink} to="/about">About</Nav.Link>
          <Nav.Link as={NavLink} to="/corporate-training">Corporate Training</Nav.Link>
          <Nav.Link as={NavLink} to="/online-registration">Online Registration</Nav.Link>
          <Nav.Link as={NavLink} to="/certificate">Certificate</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
  );
};

export default Header;