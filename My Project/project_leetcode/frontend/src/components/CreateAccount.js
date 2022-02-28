import React from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import HomepageNavbar from './HomepageNavbar';

function CreateAccount() {
    return (
        <div>
            <Container fluid>
                <HomepageNavbar />
                   <Container >
                       <Container>
                <h1>Create Account</h1>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicFirstName">
                        <Form.Label>First Nmae</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUserId">
                        <Form.Label>User Id</Form.Label>
                        <Form.Control type="text" placeholder="Enter User Id" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email Id</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email Id" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                </Container>
                </Container>
            </Container>
        </div>
    )
}

export default CreateAccount