import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';

import '../assets/css/navbar.css'

function NavBar() {
    return (
            <Navbar className="navbar" bg="dark" expand="lg">
                <Navbar.Brand className='brand' href="/">CSI-Project</Navbar.Brand>
                <Navbar.Toggle className="toggle" aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav">
                        <Nav.Link className="navLink" href="/">Home</Nav.Link>
                        <Nav.Link className="navLink" href="/about">About Us</Nav.Link>
                        <Nav.Link className="navLink" href="/profile">Profile</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

    )
}

export default NavBar;
