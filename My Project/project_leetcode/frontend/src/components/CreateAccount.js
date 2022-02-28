import React from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import HomepageNavbar from './HomepageNavbar';
import { useState } from 'react';
import axios from 'axios'
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';


function CreateAccount() {

    const add_user = {
        first_name: '',
        last_name: '',
        contact: '',
        email: '',
        password: '',
    }

    const [user, setNewUser] = useState(add_user)

    function createUser(event) {
        axios({
            method: 'POST',
            url: "/users/users_data/",
            data: {
                first_name: user.first_name,
                last_name: user.last_name,
                contact: user.contact,
                email: user.email,
                password: user.password
            }
        })

        setNewUser((add_user))

        event.preventDefault()
    }

    function handleChange(event) {
        const { value, name } = event.target

        setNewUser(prevUser => ({
            ...prevUser, [name]: value
        }))
    }


    return (
        <div>
            <Container fluid>
                <HomepageNavbar />
                <Container >
                    <Container>
                        <h1>Create Account</h1>

                        {/* <Form>
                            <Form.Group className="mb-3" controlId="formBasicFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control onChange={handleChange} name="first_name" value={user.first_name} type="text" placeholder="Enter First Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control onChange={handleChange} name="last_name" value={user.last_name} type="text" placeholder="Enter Last Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicContact">
                                <Form.Label>Contact Number</Form.Label>
                                <Form.Control onChange={handleChange} name="contact" value={user.contact} type="number" placeholder="Enter your Contact No." />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email Id</Form.Label>
                                <Form.Control onChange={handleChange} name="email" value={user.email} type="email" placeholder="Enter Email Id" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control onChange={handleChange} name="password" value={user.password} type="password" placeholder="Password" />
                            </Form.Group>

                            <Button onClick={createUser} variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form> */}

                        <form>
                            <MDBRow className='mb-4'>
                                <MDBCol>
                                    <MDBInput onChange={handleChange} name="first_name" value={user.first_name} id='form3Example1' label='First name' />
                                </MDBCol>
                                <MDBCol>
                                    <MDBInput onChange={handleChange} name="last_name" value={user.last_name} id='form3Example2' label='Last name' />
                                </MDBCol>
                            </MDBRow>
                            <MDBInput className='mb-4' onChange={handleChange} name="contact" value={user.contact} type='number' id='form3Example5' label='Contact Number' />
                            <MDBInput className='mb-4' onChange={handleChange} name="email" value={user.email} type='email' id='form3Example3' label='Email address' />
                            <MDBInput className='mb-4' onChange={handleChange} name="password" value={user.password} type='password' id='form3Example4' label='Password' />

                            <MDBCheckbox
                                wrapperClass='d-flex justify-content-center mb-4'
                                id='form3Example5'
                                label='Subscribe to our newsletter'
                                defaultChecked
                            />

                            <MDBBtn onClick={createUser} type='submit' className='mb-4' block>
                                Sign in
                            </MDBBtn>

                            <div className='text-center'>
                                <p>
                                    Not a member? <a href='#!'>Register</a>
                                </p>
                                <p>or sign up with:</p>

                                <MDBBtn floating className='mx-1'>
                                    <MDBIcon fab icon='facebook-f' />
                                </MDBBtn>

                                <MDBBtn floating className='mx-1'>
                                    <MDBIcon fab icon='google' />
                                </MDBBtn>

                                <MDBBtn floating className='mx-1'>
                                    <MDBIcon fab icon='twitter' />
                                </MDBBtn>

                                <MDBBtn floating className='mx-1'>
                                    <MDBIcon fab icon='github' />
                                </MDBBtn>
                            </div>
                        </form>
                    </Container>
                </Container>
            </Container>
        </div>
    )
}

export default CreateAccount