import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Col }
    from 'react-bootstrap';

function Navebar() {
    return (
        <Navbar className='Ali-navbar' bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Toggle />
                <Navbar.Collapse id="basic-navbar-nav navbarScroll" >
                    <Nav className="me-auto my-2 my-lg-0" navbarScroll>
                        <Nav.Link href="/">Welcome</Nav.Link>
                        <Nav.Link href="/About">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navebar;