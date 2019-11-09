import React from "react";
import API from "../../utils/API.js";
import { CheckList,CheckListItem } from "../Checklist";
import "./style.css";



class SteppedForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      firstname:  '',
      familyname: '',
      email:  '',
      username: '',
      password: '', 
      phone: '',
      occupation: '',
      usstate:'',
      isfoster: 0,
      istheraputic: 0,
      isrespite:0,
      welcome:'',
      rules:'',
    }
  }

  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }


  displayList =()=> {

    API.getParents()
    .then(res => console.log(JSON.stringify(res.data))
    )
    .catch(err => console.log(err));

  }

   
  handleSubmit = event => {
    event.preventDefault()
    const { firstname, email, username, password,phone, familyname,usstate, isfoster,istheraputic,isrespite, welcome, rules } = this.state
    alert(`Your registration detail: \n 
           Name ${firstname} \n 
           Email: ${email} \n 
           Username: ${username} \n
           Phone: ${phone} \n
           Family Name: ${familyname} \n
           US State: ${usstate} \n
           Is Foster: ${isfoster} \n
           Is Theraputic: ${istheraputic} \n
           Is Respite: ${isrespite} \n
           Welcome: ${welcome} \n
           Rules: ${rules} \n
           Password: ${password}`)

    if (this.state.username && this.state.password) {
      API.saveParentUser({
        firstname:  this.state.firstname,
        familyname: this.state.familyname,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password, 
        phone: this.state.phone,
        occupation: this.state.occupation,
        usstate:this.state.usstate,
        welcome:this.state.welcome,
        rules:this.state.rules,
      })
        .then(this.displayList())
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
  if(currentStep <4 && currentStep !=1){
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
  if(currentStep <4){
    return (
      <button 
        className="btn btn-primary float-right" 
        type="button" onClick={this._next}>
      Next
      </button>        
    )
  }

  else if (currentStep ===4) {
    
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
      <h3>Parent Sign Up</h3>
      <p>Step {this.state.currentStep} of 5</p> 

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

        <Step5
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
    <div className="intro-group">
    <h2>WELCOME TO HOMEZONE</h2>
    <p>HomeZone is a tool to improve your relationship with your foster child or teen.</p>
    <CheckList>
          <CheckListItem color="gre">Learn about their foster family</CheckListItem>
          <CheckListItem color="gre">Earn coins and rewards with good behavior</CheckListItem>
          <CheckListItem color="gre">Send notes to their foster parents</CheckListItem>

    </CheckList>
    </div>
  );
}

function Step2(props) {
  if (props.currentStep !== 2) {
    return null
  } 
  return(

    <div className="all">
    <div className="form-group">
      <h2>Create your Account</h2>
      <label htmlFor="firstname">Name</label>
      <input
        className="form-control"
        id="firstname"
        name="firstname"
        type="text"
        placeholder="Enter your first name"
        value={props.firstname}
        onChange={props.handleChange}
        />
        </div>


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

      <div className="form-group">
      <label htmlFor="phone">Phone Number</label>
      <input
        className="form-control"
        id="phone"
        name="phone"
        type="text"
        placeholder="Enter email"
        value={props.phone}
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
    <div className="step3">
      <h2>Build Your Home Profile</h2>
      <div className="form-groupt">
      <label htmlFor="familyname">Family Name</label>
      <input
        className="form-control"
        id="familyname"
        name="familyname"
        type="text"
        placeholder="Example 'The Hernandez Family'"
        value={props.familyname}
        onChange={props.handleChange}
        />
      </div>

      <div className="form-group">
      <label for="occupation">Your Occupation</label>
      <input
        className="form-control"
        id="occupation"
        name="occupation"
        type="text"
        placeholder="Example: Teacher, Mailperson, Astronaut"
        value={props.occupation}
        onChange={props.handleChange}
        />
      </div>


      <div className="form-group" >
      <label htmlFor="usstate">State</label>
      <select
        class="browser-default"
        id="usstate"
        name="usstate"
        value={props.usstate}
        onChange={props.handleChange}
        >

          <option value="" disabled selected>Choose your option</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
        </div>



        <label>Type of Home</label>
        <p>
        <label>
        <input type="checkbox"  name="isfoster" onChange={props.handleChecked} />
        <span>Foster Home</span>
      </label>
      </p>

      
      <p>
        <label>
        <input type="checkbox"  name="istheraputic" onChange={props.handleChange} />
        <span>Theraputic Foster Home</span>
      </label>
      </p>

      <p>
        <label>
        <input type="checkbox" name="isrespite"  onChange={props.handleChange} />
        <span>Respite Care</span>
      </label>
      </p>
        
       
       </div>
  );
}

function Step4(props) {
  if (props.currentStep !== 4) {
    return null
  } 
  return(
    <div className="step4">
      <h2>Build Your Home Profile</h2>

      <div className="form-group">
      <label htmlFor="welcome">Home Welcome Message</label>
      <p>Kids and teens will see this when they are added to your home</p>
      <textarea
        className="form-control materialize-textarea"
        id="welcome"
        name="welcome"
        type="text"
        placeholder="Your Welcome message"
        value={props.welcome}
        onChange={props.handleChange}
        />      
      </div>

      <div className="form-group">
      <label htmlFor="rules">House Rules</label>
      <p>These are expectations you have of kids like not running or lying or getting grounded for misbheavior at school. Maybe a rule is you have game nights on Fridays.</p>
      <textarea
        className="form-control materialize-textarea"
        id="rules"
        name="rules"
        type="text"
        placeholder="Your Welcome message"
        value={props.rules}
        onChange={props.handleChange}
        />      
      </div>


    </div>
  );
}


function Step5(props) {
  if (props.currentStep !== 5) {
    return null
  } 
  return(
    <React.Fragment>
    <div className="form-group">
    <h2>Your Home Profile has Been Created!</h2>
    <img className="successimg" src="https://www.seekpng.com/png/detail/14-147262_confetti-icon.png" width="200px" alt="confetti"/> 
    
    

    </div>
    <a href="/ParentPortal" className="btn btn-success btn-block successbutton">Go to Account</a>
    </React.Fragment>
  );
}




export default SteppedForm;
