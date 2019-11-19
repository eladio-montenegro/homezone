import React, { Component } from "react";
import { Container } from "../components/Grid";
import LoginForm from "../components/LoginForm";
import Nav from "../components/Nav";


class Login extends Component {


  render() {
    return (
      <div>
        <Nav/>
      <Container>


        <LoginForm> </LoginForm>
      </Container>
      </div>
      
    
    );
  }
}

export default Login;

