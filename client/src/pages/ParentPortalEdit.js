import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { CheckList,CheckListItem } from "../components/Checklist";

import Footer from "../components/Footer";
import ParentView from "../components/ParentView";

import Table from "../components/Table/Table.js";
import SideNav from "../components/SideNav";
import Sidebar from "../components/Sidebar/Sidebar.js";
import API from "../utils/API";
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';


import { cpus } from "os";


import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Language from "@material-ui/icons/Language";
// core components

import Card from "../components/Card/Card.js";
import CardBody from "../components/Card/CardBody.js";
import CardHeader from "../components/Card/CardHeader.js";
import CardIcon from "../components/Card/CardIcon.js";

import Button from "../components/CustomButtons/Button.js";
import image from '../assets/img/sidebar-1.jpg';
import logo from '../assets/img/reactlogo.png';
import SimpleModal from "../components/SimpleModal";

import TextField from '@material-ui/core/TextField';




class ParentPortalEdit extends Component  {

 

  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      firstname:  '',
      familyname: "",
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
      parentid:  localStorage.getItem("id"),
      fosterkids: [],
      parentinfo: {},
      
      
    }
  }

  

  componentDidMount() {
    this.loadParent();
    
  }

  loadParent= () => {
    this.setState({ fosterkids: [] });
    
      API.getParent(this.state.parentid)
      .then(  res => {

          this.setState({parentinfo:res.data, firstname: res.data.firstname, familyname:res.data.familyname,
          email:res.data.email, username: res.data.username, password:res.data.password, phone:res.data.phone
        ,occupation:res.data.occupation,usstate:res.data.usstate, isfoster:res.data.isfoster, istheraputic:res.data.istheraputic,
      isrespite:res.data.isrespite, welcome:res.data.welcome, rules:res.data.rules});
          
          this.loadKids(res.data.fosterkids);
      }) 
      .catch(err => console.log(err));
  };


  loadKids =(fosterKids) => {
    

    fosterKids.map(element => {

      API.getKid(element)
      .then(  res => {
        this.setState({ fosterkids: [...this.state.fosterkids,res.data] });


        
          
      })
          .catch(err => console.log(err));
          
    })
      
  }


  handleSubmit = event => {
    event.preventDefault()


    API.updateParentUser(this.state.parentid, {
      firstname:  this.state.firstname,
      familyname: this.state.familyname,
      email: this.state.email,
      username: this.state.username,
      password: this.state.password, 
      phone: this.state.phone,
      occupation: this.state.occupation,
      usstate:this.state.usstate,
      welcome:this.state.welcome,
      rules:this.state.rules,}
      )
      .then(myDude => {
   
        this.loadParent();
  
      })
      .catch(err => console.log(err));

      var x = document.getElementById("notice");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }

    
  }




  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    

   
  }

  
  render() {

    let listKids= this.state.fosterkids.map((item, i) =>  

    
    <Col  size="col s12 m4" key={i}>
     
    <Card>

        </Card> 
        </Col>

    

    );
    



    return (
    
     
      <div>

         
 
      <Container>
{/* 
        <Sidebar
           routes={appRoutes}
           logoText={"HomeZone"}
           logo={logo}
           image={image}
           color="blue"
          
           /> */}

      <Row>

        <Col size="col s12 m6">
        <h1>{this.state.parentinfo.firstname}'s HomeZone</h1>
        <h3>Family Code: {this.state.parentinfo.code}</h3>
        <h2>Edit Profile</h2>
        <p>Kids have access to your profile so make sure the information is up to date!</p>
        
      <div className="form-group">
      <h4>General Account Information</h4>
      <label htmlFor="firstname">First Name</label>
      <input
        className="form-control"
        id="firstname"
        name="firstname"
        type="text"
        placeholder="Enter your first name"
        value={this.state.firstname || ''}
        onChange={this.handleChange}
        />
        </div>

      <div className="form-group">
      <label htmlFor="familyname">Family Name</label>
      <input
        className="form-control"
        id="familyname"
        name="familyname"
        type="text"
        placeholder="Enter Family Name"
        value={this.state.familyname || ''}
        onChange={this.handleChange}
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
        value={this.state.username || ''}
        onChange={this.handleChange}
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
        value={this.state.password || ''}
        onChange={this.handleChange}
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
        value={this.state.email || ''}
        onChange={this.handleChange}
        />      
      </div>

      <div className="form-group">
      <label htmlFor="phone">Phone Number</label>
      <input
        className="form-control"
        id="phone"
        name="phone"
        type="text"
        placeholder="Enter phone"
        value={this.state.phone || ''}
        onChange={this.handleChange}
        />      
      </div>



      <h4>Home Profile</h4>


      <div className="form-group">
      <label htmlFor="occupation">Your Occupation</label>
      <input
        className="form-control"
        id="occupation"
        name="occupation"
        type="text"
        placeholder="Example: Teacher, Mailperson, Astronaut"
        value={this.state.occupation || ''}
        onChange={this.handleChange}
        />
      </div>


      <div className="form-group" >
      <label htmlFor="usstate">State</label>
      <select
        className="browser-default"
        id="usstate"
        name="usstate"
        value={this.state.usstate  || ''}
        onChange={this.handleChange}
        >

          <option value="" >Choose your option</option>
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


      <div className="form-group">
      <label htmlFor="welcome">Home Welcome Message</label>
      <textarea
        className="form-control materialize-textarea"
        id="welcome"
        name="welcome"
        type="text"
        placeholder="Your Welcome message"
        value={this.state.welcome || ''}
        onChange={this.handleChange}
        />      
      </div>

      <div className="form-group">
      <label htmlFor="rules">House Rules</label>
      <textarea
        className="form-control materialize-textarea"
        id="rules"
        name="rules"
        type="text"
        placeholder="Your Welcome message"
        value={this.state.rules  || ''}
        onChange={this.handleChange}
        />      
      </div>
        
 
    </Col>

    <Col size="col s6 m2">

      <div style={{marginTop:"30px"}} >
      <Button color="primary" type="button" onClick={this.handleSubmit}> SAVE</Button>
      <div id="notice" style={{display:"none"}}><h3>Profile Saved!</h3></div>
      </div>


    </Col>
        </Row>
       
      </Container>
      

      </div>
    );
    }
}


export default ParentPortalEdit;