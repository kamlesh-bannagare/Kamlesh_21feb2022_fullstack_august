import React from 'react'
import { Container, Table } from 'react-bootstrap';

import {
    MDBContainer,
    MDBNavbar,
    MDBBtn
} from 'mdb-react-ui-kit';

import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import HomepageNavbar from '../HomepageNavbar'

function ShowProblem() {
    const [logout, setLogout] = useState(false)

    const [problems, setNewProblems] = useState([])
    const [tempProblem, setTempProblem] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        getProblems()
    }, [])

    function getProblems() {
        axios({
            method: "GET",
            url: "/api/problem/"
        }).then((response) => {
            console.log(response.data)
            // const data = response.data
            if (response.data.isLogin == true) {
                setLogout(response.data.isLogin)
                // const data = response.data
                setNewProblems(response.data.data)
                setTempProblem(response.data.data)
            }
            else {
                navigate("/SignIn")
            }


        }).catch((error) => {
            if (error.response) {
                console.log(error.response);
                console.log(error.response.status);
                console.log(error.response.headers)
            }
        })
    }

const searchHandler=(e)=>{
 
    if (e.target.value){
        const filtered=problems.filter((element)=> element.title.toLowerCase().includes(e.target.value.toLowerCase()))
      
        setTempProblem(filtered)
    }
    else{
        setTempProblem(problems)
    }
}

    return (
        <div>
            <HomepageNavbar canLogout={logout} />
            <Container fluid>

                
                    <MDBContainer fluid>
                    <div class="p-3 col-example">
                        <form className='d-flex input-group w-auto'>
                            <input type='search' className='form-control' placeholder='Search Problem' aria-label='Search' onChange={searchHandler} />
                            {/* <MDBBtn color='primary'>Search</MDBBtn> */}
                        </form>
                        </div>
                    </MDBContainer>
               


                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Status</th>
                            <th>acceptance</th>
                            <th>difficulty</th>
                            <th>frequency</th>
                            <th>tag</th>

                        </tr>
                    </thead>
                    {tempProblem.map((problem) => {
                        console.log(problem)
                        return (
                            <tbody key={problem.index} >
                                <tr>
                                    <td>{problem.index}</td>
                                    <Link to={`/showProblemDetails/${problem.index}`}><td>{problem.title}</td></Link>
                                    <td>{problem.status_id}</td>
                                    <td>{problem.acceptance}</td>
                                    <td>{problem.difficulty_id}</td>
                                    <td>{problem.frequency}</td>
                                    <td>{problem.tag_id}</td>

                                </tr>
                            </tbody>);
                    })}
                </Table>

            </Container>


        </div>
    )
}

export default ShowProblem