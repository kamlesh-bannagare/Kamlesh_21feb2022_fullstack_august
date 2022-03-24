import React from 'react'
import { Container, Table } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route, Link ,useNavigate} from "react-router-dom";
import HomepageNavbar from '../HomepageNavbar'

function ShowProblem() {
    const [logout ,setLogout]=useState(false)

    const [problems, setNewProblems] = useState([])
    const navigate=useNavigate()
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
            if (response.data.isLogin==true){
                setLogout(response.data.isLogin)
                // const data = response.data
                setNewProblems(response.data.data)
            }
            else{
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

    return (
        <div>
            <HomepageNavbar canLogout={logout} />
            <Container fluid>
              
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
                    {problems.map((problem) => {
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