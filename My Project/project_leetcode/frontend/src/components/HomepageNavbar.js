import React from 'react'
// import {  Link } from "react-router-dom";
import { Navbar, Container, Nav, Row, Col, Button } from 'react-bootstrap';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

function HomepageNavbar(props) {
const navigate=useNavigate()
const logout=()=>{
axios.get("/users/logout").then((res)=>{
    navigate("/SignIn")
})
}

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

               {
                   props.canLogout?
                   <Button onClick={logout}>Logout</Button>:
                   <Nav className="container-fluid d-flex justify-content-end" >
                   <div style={{paddingRight:5}}>
                   <MDBDropdown group className="ml-3">
                       <MDBDropdownToggle color='success'>Login</MDBDropdownToggle>
                       <MDBDropdownMenu>
                           <MDBDropdownItem>
                              <Link to="/SignIn"> <MDBDropdownLink>Login As A Simple User</MDBDropdownLink></Link>
                           </MDBDropdownItem>
                           <MDBDropdownItem>
                              <Link to="/adminsignin"> <MDBDropdownLink>Login As An Admin</MDBDropdownLink></Link>
                           </MDBDropdownItem>
                       </MDBDropdownMenu>
                   </MDBDropdown>
                   </div>
                  <div >
                   <Nav.Item className="ms-auto">
                       <Row>
                           <Link to="/CreateAccount"> <Button variant="dark">Register</Button></Link>
                       </Row>
                   </Nav.Item>
                   </div>
               </Nav>
               }
            </Container>
        </Navbar></div>
    )
}

export default HomepageNavbar