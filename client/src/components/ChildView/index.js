import React from "react";
import API from "../../utils/API.js";
import {KidSteppedForm} from "../KidSteppedForm";
import "./style.css";


class ChildView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      coinCount: 0
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
    const {coinCount} = this.state
    alert(
      `Your Coin Count: \n 
      Coin Count: ${coinCount} \n `
    )

    if (this.state.username && this.state.password) {
      API.saveParentUser({
        rules:this.state.rules,
      })
      .then(this.displayList())
      .catch(err => console.log(err));
    }
  }
  
  render() {    
    return (
      <React.Fragment>
        <PortalWelcome
          coinCount={this.state.coinCount} 
          handleChange={this.handleChange}
        />
      </React.Fragment>
    );
  }
}

function PortalWelcome (props) {
  if (props.currentStep !== 1) {
    return null
  } 
  return(
    <div className="intro-group">
    <h2>Welcome to HomeZone, Nickname</h2>
    </div>
  );
}
export default ChildView;
