import React from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import HomepageNavbar from '../HomepageNavbar';
import {useState, useEffect} from 'react';
import axios from 'axios'

function AddProblem() {

    const add_problem = {
        title: '',
        status: '',
        solution: '',
        acceptance: '',
        difficulty: '',
        frequency: '',
        description: '',
        example: '',
        constraint: '',
        user_id: '',
        tag: '',
        company: '',
        featured_question: '',
    }
    console.log("problme object:", add_problem)
    const [problem, setNewProblem] = useState(add_problem)
   
    // useEffect(() => 
    //     getProblems()
    // }, [])

    // function getProblems() {
    //     axios({
    //         method: "GET",
    //         url: "/api/problem/"
    //     }).then((response) => {
    //         const data = response.data

    //         setNewProblems(data)
    //     }).catch((error) => {
    //         if (error.response) {
    //             console.log(error.response);
    //             console.log(error.response.status);
    //             console.log(error.response.headers)
    //         }
    //     })
    // }

function createProblem(event){
    axios({
        method: 'POST',
        url: "/api/problem/",
        data:{
            title: problem.title,
            status_id:problem.status,
            solution:problem.solution,
            acceptance:problem.acceptance,
            difficulty_id:problem.difficulty,
            frequency: problem.frequency,
            description:problem.description,
            example:problem.example,
            constraint:problem.constraint,
            user_id:problem.user_id,
            tag_id:problem.tag,
            company: problem.company,
            Featured_question:problem.featured_question
        }
    })

    setNewProblem((add_problem))

    event.preventDefault()
}

    function handleChange(event) {
        const { value, name } = event.target
        
        setNewProblem(prevProblem => ({
            ...prevProblem, [name]: value
        }))
    }

    console.log("data endered:",problem)
    return (
        <div>
            <Container fluid>
                <HomepageNavbar />
                <Container >
                    <Container>
                        <h1>Add Problem</h1>

                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control onChange={handleChange} name="title" value={problem.title} type="text" placeholder="Enter Title(ex.Two sum)" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicStatus">
                                <Form.Label>Status</Form.Label>
                                <Form.Control onChange={handleChange} name="status" value={problem.status} type="text" placeholder="Enter Status (ex. todo)" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicSolution">
                                <Form.Label>Solution</Form.Label>
                                <Form.Control onChange={handleChange} name="solution" value={problem.solution} type="text" placeholder="Enter Solution (ex. print(a+b)" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicAcceptance">
                                <Form.Label>acceptance</Form.Label>
                                <Form.Control onChange={handleChange} name="acceptance" value={problem.acceptance} type="number" placeholder="Enter acceptance (ex. 70.34%)" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicDifficulty">
                                <Form.Label>difficulty</Form.Label>
                                <Form.Control onChange={handleChange} name="difficulty" value={problem.difficulty} type="text" placeholder="Enter difficulty (ex. easy)" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicfrequency">
                                <Form.Label>Frequency</Form.Label>
                                <Form.Control onChange={handleChange} name="frequency" value={problem.frequency} type="number" placeholder="Enter Frequency (ex. 8)" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicdescription">
                                <Form.Label>Description</Form.Label>
                                <Form.Control onChange={handleChange} name="description" value={problem.description} type="text" placeholder="Enter Description (ex. you have to take two number and add it)" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicExample">
                                <Form.Label>Example</Form.Label>
                                <Form.Control onChange={handleChange} name="example" value={problem.example} type="text" placeholder="Enter example (ex. 2+4=6)" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicConstraints">
                                <Form.Label>Constraints</Form.Label>
                                <Form.Control onChange={handleChange} name="constraint" value={problem.constraint} type="text" placeholder="Enter constraints (ex. 0<n<100)" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicuserid">
                                <Form.Label>user_id</Form.Label>
                                <Form.Control onChange={handleChange} name="user_id" value={problem.user_id} type="number" placeholder="Enter user id (ex. 1)" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicTag">
                                <Form.Label>Tag</Form.Label>
                                <Form.Control onChange={handleChange} name="tag" value={problem.tag} type="text" placeholder="Enter Tag id (ex. array)" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicCompany">
                                <Form.Label>Company Name</Form.Label>
                                <Form.Control onChange={handleChange} name="company" value={problem.company} type="text" placeholder="Enter Company (ex. google)" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicfeatured">
                                <Form.Label>Featured_question</Form.Label>
                                <Form.Control onChange={handleChange} name="featured_question" value={problem.featured_question} type="text" placeholder="Enter Featured_question (ex.top google question)" />
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={createProblem}>
                                Submit
                            </Button>
                        </Form>
                    </Container>
                </Container>
            </Container>
        </div>
    )
}

export default AddProblem