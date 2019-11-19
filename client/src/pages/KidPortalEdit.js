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





class KidPortalEdit extends Component  {

 

  constructor(props) {
    super(props)
    this.state = {
      currentStep: 1,
      firstname:  '',
      nickname:'',
      username:'',
      password:'',
      hobbies:'',
      likes: '',
      pronouns:'',
      allergies:'',
      bio:'',
      foodrestrictions:'',
      kidid:  localStorage.getItem("kidid"),
      kidinfo: {},
      
      
    }
  }

  

  componentDidMount() {
    this.loadKid();
    
  }

  loadKid= () => {
    
      API.getKid(this.state.kidid)
      .then(  res => {

          this.setState({kidinfo:res.data});
          
         
      }) 
      .catch(err => console.log(err));
  };




  handleSubmit = event => {
    event.preventDefault()


    API.updateKidUser(this.state.kidid, {
      firstname:  this.state.firstname,
      hobbies:this.state.hobbies,
      dislikes:this.state.dislikes,
      pronouns:this.state.pronouns,
      allergies:this.state.allergies,
      foodrestrictions: this.state.foodrestrictions,
     }
      )
      .then(myDude => {
   
        this.loadKid();
  
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

         <Sidebar></Sidebar>
 
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

      <Col  size="col s12 l10 m9 offset-l2 offset-m4">
        <h1>{this.state.parentinfo.firstname}'s HomeZone</h1>
        
      <div className="form-group">
      <h4>General Account Information</h4>
      <p>Your kids have access to your profile so make sure the information is up to date!</p>
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


export default KidPortalEdit;