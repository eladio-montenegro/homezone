import React, { Component } from "react";
import { Container } from "../components/Grid";
import KidSteppedForm from "../components/KidSteppedForm";


import { cpus } from "os";

class KidSignUp extends Component {


  render() {
    return (
      <div>
      <Container>
        <KidSteppedForm></KidSteppedForm>
      </Container>
      </div>
    );
  }
}

export default KidSignUp;

