import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { CheckList,CheckListItem } from "../components/Checklist";
import Footer from "../components/Footer";
import SideNav from "../components/SideNav";
import { cpus } from "os";

class KidPortal extends Component {


  render() {
    return (
      <div>
        <SideNav></SideNav>
        <Container></Container>
      
      </div>
    );
  }
}

export default KidPortal;

