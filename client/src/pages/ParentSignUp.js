import React, { Component } from "react";
import { Container } from "../components/Grid";
import SteppedForm from "../components/SteppedForm";
import Nav from "../components/Nav";


import { cpus } from "os";

class ParentSignUp extends Component {


  render() {
    return (
      <div>
       <Nav/>
        <Container>
        
        <SteppedForm></SteppedForm>
      </Container>
      </div>
    
    );
  }
}

export default ParentSignUp;

