import React, { Component } from "react";
import { Container } from "../components/Grid";
import SteppedForm from "../components/SteppedForm";


import { cpus } from "os";

class ParentSignUp extends Component {


  render() {
    return (
      <div>
       
        <Container>
        
        <SteppedForm></SteppedForm>
      </Container>
      </div>
    
    );
  }
}

export default ParentSignUp;

