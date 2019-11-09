import React from "react";
import API from "../../utils/API.js";
import "./style.css";


class ChildView extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
    const {} = this.state

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
      </React.Fragment>
    );
  }
}

export default ChildView;
