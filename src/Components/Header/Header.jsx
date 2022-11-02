import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../Assets/logo.png';
import { FiSearch } from "react-icons/fi";
import './Header.css';
import { Button } from 'react-bootstrap';

function Header() {
  return (
    <div>
        <Navbar fixed="top" className="nav_main" collapseOnSelect expand="lg" bg="" variant="">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">
            {/* <div class="nav-widget-form"><form class="search-form"><input type="search" class="form-control" placeholder="Search items, Creators "/><button className='pink' type="submit"><FiSearch /></button></form></div> */}
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="nev text-white" href="#deets">Home</Nav.Link>
            <Nav.Link className="nev text-white" href="#deets">Marketplace</Nav.Link>
            <Nav.Link className="nev text-white" href="#deets">Collections</Nav.Link>
           <Button className="creat_btn nev text-white"> <Nav.Link className="text-white" href="#deets">Create</Nav.Link> </Button>
           <Button className="connect_btn nev "> <Nav.Link className="text-white" href="#deets">Connect Wallet</Nav.Link> </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header