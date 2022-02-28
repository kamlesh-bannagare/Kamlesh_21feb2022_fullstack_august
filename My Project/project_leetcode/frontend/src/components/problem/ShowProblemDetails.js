import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
function ShowProblemDetails() {
    const {id} = useParams()
    const [problems, setNewProblems] = useState([])
    console.log("id:",id)
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
        <MDBRow>
            <MDBCol md='8' className='col-example'>
                md="8" t;lkdjfasdl
            </MDBCol>
            <MDBCol md='4' className='col-example'>
                md="4"
            </MDBCol>
        </MDBRow>
    );
}

export default ShowProblemDetails