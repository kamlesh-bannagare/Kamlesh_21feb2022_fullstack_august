import React from 'react'
import {Container} from 'react-bootstrap';
import Footer from './Footer';

import HomepageBody from './HomepageBody';
import HomepageNavbar from './HomepageNavbar';
import AddProblem from './problem/AddProblem';
import ShowProblem from './problem/ShowProblem';


function Homepage() {
  return (
    <div>
      <Container fluid>
        <HomepageNavbar />
        <HomepageBody />
      </Container>

    </div>
  )
}

export default Homepage