import React from 'react'
import {Container, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/" >Pen Down
          
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
          <Form inline >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            </Form>
          </Nav>
          {/* navbar */}
          <Nav.Link href="/mynotes">My Notes</Nav.Link>
            <NavDropdown title="Aditya Goswami is " id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
            </NavDropdown>
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
