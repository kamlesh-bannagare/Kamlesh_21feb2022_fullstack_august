import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
// import axios from 'axois'
import {
    MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
} from 'mdb-react-ui-kit';
import HomepageNavbar from './HomepageNavbar';

export default function AdminSighIn() {
    // const login=(event)=>{
    //     axios({
    //         method: 'POST',
    //         url: "/users/login/",
    //         data: {
    //             email: user.email,
    //             password: user.password
    //         }
    //     }).then(res => {
    //         console.log(res.data)
    //         if (res.data.isLogin==true) {
    //             console.log("res", res.data.login)
    //             navigate("/showProblem")
    //         }
    //     })
    //     event.preventDefault()
    // }
    return (
        <Container fluid >
            <HomepageNavbar />
            <Container>
                <h1>Admin Login!!</h1>
                <Container style={{paddingTop:20,paddingBottom:50}}>
                    <form>
                        <MDBInput className='mb-4' type='email' id='form2Example1' label='Email address' />
                        <MDBInput className='mb-4' type='password' id='form2Example2' label='Password' />

                        <MDBRow className='mb-4'>
                            <MDBCol className='d-flex justify-content-center'>
                                <MDBCheckbox id='form2Example3' label='Remember me' defaultChecked />
                            </MDBCol>
                            <MDBCol>
                                <a href='#!'>Forgot password?</a>
                            </MDBCol>
                        </MDBRow>

                        <MDBBtn type='submit' className='mb-4' block>
                            Sign in
                        </MDBBtn>

                        <div className='text-center'>
                            
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