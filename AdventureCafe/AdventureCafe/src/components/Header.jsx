import React from 'react'
import {Navbar, Container, Nav, Dropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Cart from './Cart'
 //<Cart/>//Cart.jsx will break the react pages. Do not use 

function Header() {
  return (
    <div>
    <Navbar bg="secondary" expand="lg" fixed="top">
  <Container>
    <Navbar.Brand href="/aboutus">The Adventure Café</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <Nav.Link href="/aboutus">About Us</Nav.Link>
        <Nav.Link href="/menu">Trips On Offer</Nav.Link>
        <Nav.Link href="/contact">Contact Us</Nav.Link>
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/register">Register</Nav.Link>
      </Nav>
      
      
      

    </Navbar.Collapse>
  </Container>


</Navbar>
</div>
  )
}

export default Header