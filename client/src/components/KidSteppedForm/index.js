import React from "react";
import API from "../../utils/API.js";
import { CheckList,CheckListItem } from "../Checklist";
import "./style.css";




class KidSteppedForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      username: '',
      password:'',
      nickname:  '',
      code: '',
      pronouns: '',
      hobbies:  '',
      allergies: '',
      petpeeves: '', 
      likes: '',
      dislikes: '',
      religion: '',
      freenote: '',
    }
  }



  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }

  displayList =()=> {

    API.getKids()
    .then(res => console.log(JSON.stringify(res.data))
    )
    .catch(err => console.log(err));

  }

   
  handleSubmit = event => {
    event.preventDefault()
    const { username,password,nickname, code, pronouns, hobbies,allergies, petpeeves,likes, dislikes,religion,freenote} = this.state
    alert(`Your registration detail: \n 
           Username: ${username} \n 
           Password: ${password} \n 
           Nickname ${nickname} \n 
           Code: ${code} \n 
           Pronouns: ${pronouns} \n 
           Hobbies: ${hobbies} \n
           Allergies: ${allergies} \n
           Petpeeves: ${petpeeves} \n
           Likes: ${likes} \n
           Religion: ${religion} \n
           Freenote: ${freenote} \n
           Dislikes: ${dislikes}` 
          )

    if (this.state.username && this.state.password) {
      API.saveKidUser({
        nickname:  this.state.nickname,
        code: this.state.code,
        pronouns: this.state.pronouns,
        hobbies: this.state.hobbies,
        allergies: this.state.allergies, 
        likes: this.state.likes,
        dislikes:this.state.dislikes,
        religion: this.state.religion,
        freenote:this.state.freenote,
      })
        .then(console.log(this.displayList()))
        .catch(err => console.log(err));
    }
  }
  
  _next = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep + 1
    this.setState({
      currentStep: currentStep
    })
  }
    
  _prev = () => {
    let currentStep = this.state.currentStep
    currentStep = currentStep <= 1? 1: currentStep - 1
    this.setState({
      currentStep: currentStep
    })
  }

/*
* the functions for our button
*/
previousButton() {
  let currentStep = this.state.currentStep;
  if(currentStep <2 && currentStep !=1){
    return (
      <button 
        className="btn btn-secondary" 
        type="button" onClick={this._prev}>
      Previous
      </button>
    )
  }
  return null;
}

nextButton(){
  let currentStep = this.state.currentStep;
  if(currentStep <3){
    return (
      <button 
        className="btn btn-primary float-right" 
        type="button" onClick={this._next}>
      Next
      </button>        
    )
  }

  else if (currentStep ==3) {
    
    return (
      <button 
        className="btn btn-primary float-right" 
        type="button" onClick={this._next}>
      Finish
      </button>        
    )

  }
  return null;
}
  
  render() {    
    return (
      <React.Fragment>

      <form onSubmit={this.handleSubmit}>
      {/* 
        render the form steps and pass required props in
      */}
        <Step1 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          
        />
        <Step2 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          firstname={this.state.firstname}
          username={this.state.username}
          email={this.state.email}
          password={this.state.password}
          phone={this.state.phone}
          
        />
        <Step3 
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
          familyname={this.state.familyname}
          usstate={this.state.usstate}
         
        />

        <Step4
          currentStep={this.state.currentStep} 
          handleChange={this.handleChange}
        />

        {this.previousButton()}
        {this.nextButton()}

      </form>

      
      </React.Fragment>

      
    );
  }
}

function Step1(props) {
  if (props.currentStep !== 1) {
    return null
  } 
  return(
    <div className="step1">
    <h2>With HomeZone, connecting with your foster homes is fast and easy!</h2>
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(
        <div className="all">
        <h3>Create your Account</h3>
        <p>Don't share your password with anyone!</p>
        <div className="form-group">
        <label htmlFor="nickname">Nick Name</label>
        <input
          className="form-control"
          id="nickname"
          name="nickname"
          type="text"
          placeholder="Enter your first name"
          value={props.firstname}
          onChange={props.handleChange}
          />
          </div>

        <label htmlFor="pronouns">Pronouns</label>
        <input
          className="form-control"
          id="pronouns"
          name="pronouns"
          type="text"
          placeholder="Example: She/Her, He/Him, They/Them"
          value={props.pronouns}
          onChange={props.handleChange}
          />
        


        <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          className="form-control"
          id="username"
          name="username"
          type="text"
          placeholder="Enter username"
          value={props.username}
          onChange={props.handleChange}
          />
    </div>


        <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          className="form-control"
          id="password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={props.password}
          onChange={props.handleChange}
          />      
        </div>

        <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          className="form-control"
          id="email"
          name="email"
          type="text"
          placeholder="Enter email"
          value={props.email}
          onChange={props.handleChange}
          />      
        </div>
        </div>
   
  );
}

function Step3(props) {

  

  if (props.currentStep !== 3) {
    return null
  } 
  return(
    <div className="all">
    <h3>Tell Us About Yourself</h3>
    <p>Everything you write here will be shared with your foster parents when you join their family. 
      This information helps them understand you.</p>
    <div className="form-group">
    <label htmlFor="hobbies">Hobbies</label>
    <input
      className="form-control"
      id="hobbies"
      name="hobbies"
      type="text"
      placeholder="Enter your first name"
      value={props.hobbies}
      onChange={props.handleChange}
      />
      </div>

    <label htmlFor="pronouns">Likes</label>
    <input
      className="form-control"
      id="likes"
      name="likes"
      type="text"
      placeholder="ie Favorite Color,animal, day of the week"
      value={props.likes}
      onChange={props.handleChange}
      />
    


    <div className="form-group">
    <label htmlFor="username">Dislikes</label>
    <input
      className="form-control"
      id="dislikes"
      name="dislikes"
      type="text"
      placeholder="ie music that annoys you, rules that bother you"
      value={props.dislikes}
      onChange={props.handleChange}
      />
</div>


    <div className="form-group">
    <label htmlFor="allergies">List any Allergies</label>
    <input
      className="form-control"
      id="allergies"
      name="allergies"
      type="text"
      placeholder="ie peanuts, carrots"
      value={props.allergies}
      onChange={props.handleChange}
      />      
    </div>

    <div className="form-group">
    <label htmlFor="email">Do you practice any religion?</label>
    <input
      className="form-control"
      id="religion"
      name="religion"
      type="text"
      placeholder="ie Christian, Jewish, Athiest,"
      value={props.religion}
      onChange={props.handleChange}
      />      
    </div>

    <div className="form-group">
      <label htmlFor="rules">What else do you want your family to know about you?</label>
      <textarea
        className="form-control materialize-textarea"
        id="freenote"
        name="freenote"
        type="text"
        placeholder="Say anything"
        value={props.freenote}
        onChange={props.handleChange}
        />      
      </div>





    </div>

  );
}




function Step4(props) {

  

  if (props.currentStep !== 4) {
    return null
  } 
  return(
     <React.Fragment>
    <div className="form-group">
    <h2>Your Home Profile has Been Created!</h2>
    <img className="successimg" src="https://www.seekpng.com/png/detail/14-147262_confetti-icon.png" width="200px" alt="Girl in a jacket"/> 
    
  
    </div>
    <button className="btn btn-success btn-block successbutton">Go to Account</button>
    </React.Fragment>
  );
}




export default KidSteppedForm;
