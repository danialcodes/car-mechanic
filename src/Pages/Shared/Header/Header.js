import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
// import { linkWithPhoneNumber } from '@firebase/auth';
const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home">Car Mechanic</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/#services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/addservice">Add Service</Nav.Link>
                        <Nav.Link as={Link} to="/manageservices">Manage Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/#experts">Expert</Nav.Link>

                        {
                            user.email ? <><Navbar.Text>
                                Signed in as: <a href="#login">{user.displayName}</a>
                            </Navbar.Text>
                            <Button onClick={logOut} variant="light">Log Out</Button>
                            </>:<Nav.Link as={Link} to="/login">Login</Nav.Link>
                        }
                        
                        {/* <Navbar.Text>
                            Signed in as: <a href="#login">{user.displayName}</a>
                        </Navbar.Text> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;