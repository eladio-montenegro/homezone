import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import LoginForm from "../components/LoginForm";
import { cpus } from "os";

class Login extends Component {


  render() {
    return (
      <div>
   
      <Container>
        <LoginForm> </LoginForm>
      </Container>
      </div>
      
    
    );
  }
}

export default Login;

