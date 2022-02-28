// import React from 'react'

import { Routes, Route, Link } from "react-router-dom";
import { Card,Button } from 'react-bootstrap';
import {useState, useEffect} from 'react'


function HomepageBody() {

  
    return (
        <div>
            <Card className="text-center">
                {/* <Card.Header>Featured</Card.Header> */}
                <Card.Body>
                    <Card.Title>A New Way to Learn</Card.Title>
                    <Card.Text>
                    LeetCode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.
                    </Card.Text>

                    <Link to="/addProblem"> <Button variant="primary">Add Problem</Button></Link>
                </Card.Body>
            </Card></div>
    )
}

export default HomepageBody