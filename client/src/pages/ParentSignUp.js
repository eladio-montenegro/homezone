import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { CheckList,CheckListItem } from "../components/Checklist";
import SteppedForm from "../components/SteppedForm";

import Footer from "../components/Footer";
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

