import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { CheckList,CheckListItem } from "../components/Checklist";
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

