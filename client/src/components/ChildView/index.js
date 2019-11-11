import React from "react";
import API from "../../utils/API.js";
import { KidSteppedForm } from "../KidSteppedForm"; //change to conform to kid stepped form
import "./style.css";


class ChildView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      firstname: '',
      familyname: '',
      email: '',
      username: '',
      password: '',
      phone: '',
      occupation: '',
      usstate: '',
      isfoster: 0,
      istheraputic: 0,
      isrespite: 0,
      welcome: '',
      rules: '',
    }
  }

  handleChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { } = this.state

    if (this.state.username && this.state.password) {
      API.saveParentUser({
        rules: this.state.rules,
      })
        .then(this.displayList())
        .catch(err => console.log(err));
    }
  }

  render() {
    return (
      <React.Fragment>
        <PortalWelcome
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
        />
      </React.Fragment>
    );
  }
}

function PortalWelcome(props) {
  if (props.currentStep !== 1) {
    return null
  }
  return (
    <div className="intro-group">
      <h2>Welcome to HomeZone, Nickname</h2>
    </div>
  );
}
export default ChildView;
