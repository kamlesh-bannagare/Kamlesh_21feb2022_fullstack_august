import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
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
import HomepageNavbar from './HomepageNavbar';

export default function SighUp() {
    const navigate = useNavigate()
    const login_details = {
        email: '',
        password: '',
    }

    const [user, setNewUser] = useState(login_details)

    function loginUser(event) {
        axios({
            method: 'POST',
            url: "/users/login/",
            data: {
                email: user.email,
                password: user.password
            }
        }).then(res => {
            console.log(res.data)
            if (res.data.login) {
                console.log("res", res.data.login)
                navigate("/showProblem")
            }
        })

        setNewUser((login_details))

        event.preventDefault()
    }

    function handleChange(event) {
        const { value, name } = event.target
        console.log(name, value)
        setNewUser(prevUser => ({
            ...prevUser, [name]: value
        }))
    }

    return (

        <Container fluid >
            <HomepageNavbar />
            <Container>
                <h1>Sign Up Here!!</h1>
                <Container style={{ paddingTop: 20, paddingBottom: 50 }}>
                    <form>
                        <MDBInput onChange={handleChange} name="email" value={user.email} className='mb-4' type='email' id='form2Example1' label='Email address' />
                        <MDBInput onChange={handleChange} name="password" value={user.password} className='mb-4' type='password' id='form2Example2' label='Password' />

                        <MDBRow className='mb-4'>
                            <MDBCol className='d-flex justify-content-center'>
                                <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
                            </MDBCol>
                            <MDBCol>
                                <a href='#!'>Forgot password?</a>
                            </MDBCol>
                        </MDBRow>

                        <MDBBtn onClick={loginUser} type='submit' className='mb-4' block>
                            Sign in
                        </MDBBtn>

                        <div className='text-center'>
                            <p>
                                Not a member? <Link to='/CreateAccount'> Register </Link>
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
    );
}