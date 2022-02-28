import React from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import HomepageNavbar from './HomepageNavbar';

function SignUp() {
    return (
        <div>
            <Container fluid >
                <HomepageNavbar />
                <Container>
                    <Container>
                        <h1>Sign Up Here!!</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>User Id</Form.Label>
                                <Form.Control type="text" placeholder="Enter User Id" />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
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

export default SignUp