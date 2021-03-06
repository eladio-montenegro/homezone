import React from "react";
import API from "../../utils/API.js";
import { CheckList,CheckListItem } from "../Checklist";
import "./style.css";
import { Col, Row, Container } from "../Grid";




class KidSteppedForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      username: '',
      password:'',
      firstname:'',
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


    if (this.state.username && this.state.password) {
      API.saveKidUser({
        username: this.state.username,
        password: this.state.password,
        firstname: this.state.firstname,
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
        .then(res => {

          console.log("hey data"+res.data);
          localStorage.setItem("kidid", res.data._id);
          window.location.href = "/kidportal";


        })
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
        <Container>
          <Row>
            <Col size="col s12 l10 m9 offset-l2 offset-m2 offset-s1">

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
          nickname={this.state.nickname}
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
          handleSubmit={this.handleSubmit}
        />

        {this.previousButton()}
        {this.nextButton()}

      </form>
          </Col>
            </Row>
             </Container>
      
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
      <br></br>
    <h2>With HomeZone, connecting with your foster homes is fast and easy!</h2>
    <br></br>
    <img class="materialboxed parent responsive" src="img/fosteryouth2.png" height="100"></img>
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(


        <div className="all">
          <br></br>
        <h3>Create your Account</h3>
        <p>Don't share your password with anyone!</p>



        <label htmlFor="firstname">Nick Name</label>
        <p>This is the name this website will refer to you as. Never use your real name online!</p>
        <input
          className="form-control"
          id="firstname"
          name="firstname"
          type="text"
          placeholder="Enter a cool nickname"
          value={props.firstname}
          onChange={props.handleChange}
          />       
        
{/*         
        
        
        
        <div className="form-group">
        <label htmlFor="nickname">Nick Name</label>
        <input
          className="form-control"
          id="nickname"
          name="nickname"
          type="text"
          placeholder="Enter your first name"
          value={props.nickname}
          onChange={props.handleChange}
          />
          </div> */}

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
      <br></br>
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
      <br></br>
    <h2>Your Home Profile has Been Created!</h2>
    <br></br>
    <img class="materialboxed parent responsive" src="img/fosteryouth3.png" height="100"></img> 
    
  
    </div>
    <a onClick={props.handleSubmit} className="btn btn-success btn-block successbutton">Go to Account</a>
    </React.Fragment>
  );
}




export default KidSteppedForm;
