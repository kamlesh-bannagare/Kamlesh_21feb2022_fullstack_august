import React from 'react'
import { Container, Table } from 'react-bootstrap';
import { useState, useEffect } from 'react'
import axios from 'axios'

function ShowProblem() {

    const [problems, setNewProblems] = useState([])

    useEffect(() => {
        getProblems()
    }, [])

    function getProblems() {
        axios({
            method: "GET",
            url: "/api/problem/"
        }).then((response) => {
            const data = response.data

            setNewProblems(data)
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
                                    <th>constraints</th>
                                </tr>
                            </thead>
                            {problems.map((problem) => {
                                console.log(problem)
                                return (
                                    <tbody key={problem.index} >
                                        <tr>
                                            <td>{problem.index}</td>
                                            <td>{problem.title}</td>
                                            <td>{problem.status_id}</td>
                                            <td>{problem.acceptance}</td>
                                            <td>{problem.difficulty_id}</td>
                                            <td>{problem.frequency}</td>
                                            <td>{problem.tag_id}</td>
                                            <td>{problem.constraint}</td>
                                        </tr>
                                    </tbody>);
                            })}
                        </Table>
                  
                </Container>
        

        </div>
    )
}

export default ShowProblem