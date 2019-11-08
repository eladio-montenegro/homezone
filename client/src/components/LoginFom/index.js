import React from "react";
import API from "../../utils/API.js";
import "./style.css";




class LoginForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      username:null,
      password:null

    }
  }


  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }

   
  handleSubmit = event => {
    event.preventDefault()
    //enter login info here
    const { username,password} = this.state


    if (this.state.username && this.state.password) {
      //you can put api calls here
      console.log("they exist!");
  }
}
  

  
  render() {    
    return (
      <React.Fragment>
          <p>just some text</p>

      
      </React.Fragment>

      
    );
  }
}




export default LoginForm;
