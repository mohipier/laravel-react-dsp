import React from 'react';
import { Link } from 'react-router-dom';
import { Container,Navbar,Nav } from 'react-bootstrap';

const NavbarMenu = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Link className="btn btn-default" 
                            to={'add/'}>Create Campaign</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    );
}

export default NavbarMenu;
