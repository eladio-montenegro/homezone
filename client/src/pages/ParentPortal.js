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



class ParentPortal extends Component  {




  state = {
    fosterkids: [],
    firstname: "",
    bio: "",
    code:"",
    id:"",
    profilelink:"",


 
  };

  componentDidMount() {
    this.loadKids();
  }

  loadKids = () => {
    API.getKids()
      .then(  res =>   this.setState({ fosterkids: res.data, firstname: "", bio: "" ,id:"", portallink:""})
      )
      .catch(err => console.log(err));

  };

  handleFormSubmit = event => {
    event.preventDefault();
    
      API.saveKidUser({
        firstname: this.state.firstname,
        profilelink: "/parentportal/" + this.state.firstname,
        code: Math.round(Math.random() * 2000),
      })
        .then(res => this.loadKids())
        .catch(err => console.log(err));
    
  };


  deleteKid = event => {

    const {name, value} = event.target
  console.log (value);


    API.deleteKid(value)
      .then(res => this.loadKids())
      .catch(err => console.log(err));
  };



  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }


  render() {
 

    let appRoutes=[{name:"Jessica",path: "/parentportal/jessica", layout:"Googs", icon:""}];
   

    const listKids= this.state.fosterkids.map((item) =>  


    <Col  size="col s12 m4">
    <Card>
      <CardHeader color="danger">
        <h4>{item.firstname}</h4>
        
      </CardHeader>
      <CardBody>
        <p>{item.pronouns}
        </p>
        <a
          href={item.profilelink}
          
        >
          VIEW PROFILE
        </a>
     
          <button
          style={{ float: 'right', backgroundColor:'white',border: 'none',borderColor:'white'}}
          name="id"
          value={item._id}
          onClick= {this.deleteKid}
           
          >
            
           REMOVE
          
          </button>
              

      </CardBody>
</Card> 
</Col>

    
    
    
    );



    return (
      
     
      <div>

         
 
      <Container>

        <Sidebar
           routes={appRoutes}
           logoText={"HomeZone"}
           logo={logo}
           image={image}
           color="blue"
          
           />

      <Row>
        <h1>My Kids</h1>
        <h3>Family Code: 2345</h3>
        <p>Add new kids here and give them your family code so they can connect with you.</p>
    
        {listKids}
        <SimpleModal 
          buttontext="+ Add New Kid"
          modaltitle="Add A Foster Kid">
           <p>This is a Modal </p> 
           <div>
                  <div className="form-group">
                  <label htmlFor="email">Kid Name</label>
                  <input
                    className="form-control"
                    id="email"
                    name="firstname"
                    type="text"
                    placeholder="Enter first name"
                    value={this.state.firstname}
                    onChange={this.handleChange}
                    />   

                    <Button color="primary" type="button" onClick={this.handleFormSubmit}> Add</Button>   
                  </div>

            </div>

        </SimpleModal>
        
        <Col  size="col s12 m4">
        
          </Col>
    
        </Row>
       
      </Container>
      

      </div>
    );
    }
}


export default ParentPortal;