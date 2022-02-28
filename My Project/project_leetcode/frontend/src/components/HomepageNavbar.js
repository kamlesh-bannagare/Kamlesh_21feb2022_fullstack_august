import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { Navbar, Container, Nav, Row, Col,Button } from 'react-bootstrap';
function HomepageNavbar() {
    return (
        <div><Navbar bg="light" variant="dark">
            <Container>
                <Link to="/" > <Navbar.Brand>
                    <img
                        src="https://assets.leetcode.com/static_assets/public/webpack_bundles/images/logo-dark.e99485d9b.svg"
                        width="100"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand></Link>

                <Nav className="container-fluid">
                    <Nav.Item className="ms-auto">
                        <Row>
                            <Link to="/SignUp"> <Button variant="dark">Login</Button></Link>
                        </Row>
                    </Nav.Item>

                    <Nav.Item className="ms-auto">
                        <Row>
                            <Link to="/CreateAccount"> <Button variant="dark">Register</Button></Link>
                        </Row>
                    </Nav.Item>
                </Nav>
            </Container>
        </Navbar></div>
    )
}

export default HomepageNavbar