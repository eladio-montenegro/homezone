import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { CheckList,CheckListItem } from "../components/Checklist";
import Footer from "../components/Footer";
import ParentView from "../components/ParentView";
import { cpus } from "os";

class ParentPortal extends Component {


  render() {
    return (
      <div>
        <Container>
          <ParentView></ParentView>
        </Container>
      </div>
    );
  }
}

export default ParentPortal;

