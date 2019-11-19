import React, { Component } from "react";
import { Container } from "../components/Grid";
import KidSteppedForm from "../components/KidSteppedForm";
import Nav from "../components/Nav";


import { cpus } from "os";

class KidSignUp extends Component {


  render() {
    return (
      <div>

        <Nav/>
      <Container>
        <KidSteppedForm></KidSteppedForm>
      </Container>
      </div>
    );
  }
}

export default KidSignUp;

