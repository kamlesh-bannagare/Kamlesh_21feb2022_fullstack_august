import React, { Component } from 'react';
import {
    MDBRow,
    MDBCol,
    MDBInput,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
} from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Container } from 'react-bootstrap';


function ShowProblemDetails() {

    const [fillActive, setFillActive] = useState('tab1');

    const handleFillClick = (value: string) => {
        if (value === fillActive) {
            return;
        }

        setFillActive(value);
    };



    const { id } = useParams()
    const [problem, setNewProblem] = useState([])

    useEffect(() => {
        getProblems()
    }, [])

    function getProblems() {
        axios({
            method: "GET",
            url: `/api/problem/${id}`
        }).then((response) => {
            const data = response.data
            console.log("data:", data)
            setNewProblem(data)
        }).catch((error) => {
            if (error.response) {
                console.log(error.response);
                console.log(error.response.status);
                console.log(error.response.headers)
            }
        })
    }
    console.log("state:", problem.title)

    return (
        <Container fluid>
            <MDBRow>
                <MDBCol md='6' className='col-example'>

                    <MDBTabs fill className='mb-4'>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
                                Description
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
                                Solution
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleFillClick('tab3')} active={fillActive === 'tab3'}>
                                Discuss
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleFillClick('tab4')} active={fillActive === 'tab4'}>
                                Submission
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>

                    <MDBTabsContent>
                        <MDBTabsPane show={fillActive === 'tab1'}>
                            <h1>{problem.title}</h1>
                            <h4 style={{color:problem.difficulty_id=='easy'? 'green':'red'}}>{problem.difficulty_id}</h4>
                            <p>{problem.description}</p>
                            <h4>Example:</h4>
                            <p>{problem.example}</p>
                            <h4>Constrains:</h4>
                            <p>{problem.constraint}</p>
                            </MDBTabsPane>
                        <MDBTabsPane show={fillActive === 'tab2'}>{problem.solution}</MDBTabsPane>
                        <MDBTabsPane show={fillActive === 'tab3'}>This is Discussion</MDBTabsPane>
                        <MDBTabsPane show={fillActive === 'tab4'}>This is Your Submission</MDBTabsPane>
                    </MDBTabsContent>


                </MDBCol>
                <MDBCol md='6' className='col-example'>
                    <MDBInput label='Write Your Code Here' id='textAreaExample' textarea rows={50} />
                </MDBCol>
            </MDBRow>
        </Container>
    );
}

export default ShowProblemDetails