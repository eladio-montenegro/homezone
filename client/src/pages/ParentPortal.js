import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
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
import Sidebar from "../components/Sidebar/Sidebar.js";

import Button from "../components/CustomButtons/Button.js";
import SimpleModal from "../components/SimpleModal";



class ParentPortal extends Component  {
  state = {
    parentid: localStorage.getItem("id"),
    fosterkids: [],
    parentname:"",
    firstname: "",
    newkidname:"",
    newkidid:"",
    id:"",
    bio: "",
    parentinfo: {},
    profilelink:"",
    firstload: 0,

  };

  componentDidMount() {
    this.loadParent();
    
  };

  loadParent= () => {
    this.setState({ fosterkids: [] });
    
      API.getParent(this.state.parentid)
      .then(  res => {

          this.setState({parentinfo:res.data});
          
           this.loadKids();
      }) 
      .catch(err => console.log(err));
  };


  loadKids =() => {
    this.state.parentinfo.fosterkids.map(element => {
      API.getKid(element)
      .then( res => {
        this.setState({ fosterkids: [...this.state.fosterkids,res.data] });
       
 
      })
          .catch(err => console.log(err));
          
    })
      
  }

    //checks to see if we are entering from parent portal or from a kid login
    determineEntry=()=> {

      if (this.state.parentid){

 
        this.loadParent();
        
      }

      else {
          //if neither then we need to redirect to the login page
      
          window.location.href = "/login";

      }

      

     
    }




  handleFormSubmit = event => {
    event.preventDefault();

      API.saveKidUser({
        "firstname" : this.state.newkidname,
        "fosterfamilies" : [ 
            this.state.parentid
        ]
      })
        .then(res => { this.getNewKid(res.data._id);})
        .catch(err => console.log(err));

  };

 getNewKid= (newKidID) => { 
    

    API.getKid(newKidID)
    .then(  res => {
      
      this.setState(
      { fosterkids: [...this.state.fosterkids,res.data]});    
      this.addNewKid();
        
    })
        .catch(err => console.log(err));

  };


  addNewKid=()=> {

    API.updateParentUser(this.state.parentid, {fosterkids: this.state.fosterkids})
      .then(myDude => {
        this.loadParent();
       
      })
      .catch(err => console.log(err));

  };

  deleteKid = event => {

    const {name, value} = event.target;
    const fosterkids =this.state.fosterkids.filter(kid => kid._id !== value);
  

  
    API.updateParentUser(this.state.parentid, {
      fosterkids: fosterkids}
      )
      .then(myDude => {
   
        this.loadParent();
        this.updateDeletedKid(value);
  
      })
      .catch(err => console.log(err));

      
  };

  updateDeletedKid=(id)=>{

    API.updateKidUser(id, {
      currentfamily: 0,}
      )
      .then()
  
      .catch(err => console.log(err));

  }



  handleChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    });    

   
  }


  viewKidProfile = (id) => {

    localStorage.setItem("parentkidprofile", id);

    window.location.href = "parentportal/kidportal/" + id; 
   
  }

  
  render() {
 
    
    let appRoutes=[{name:"Jessica",path: "/parentportal/jessica", layout:"Googs", icon:""}];
    let listKids= this.state.fosterkids.map((item, i) =>  
      <Col  size="col s12 m4" key={i}>
        <Card>
          <CardHeader color="info">
            <h4>{item.firstname}</h4>
        
          </CardHeader>
          <CardBody>
            <p>{item.pronouns}</p>
            <a onClick={() => this.viewKidProfile(item._id)} >VIEW PROFILE</a>
     
            <button
            style={{ float: 'right', backgroundColor:'white',border: 'none',borderColor:'white'}}
            name={item.firstname}
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

         
<Sidebar></Sidebar>

      <Container>

        
      <Row>
      <Col  size="col s12 l10 m9 offset-l2 offset-m4">
        <h1>{this.state.parentinfo.firstname}'s HomeZone</h1>
        <h3>Family Code: {this.state.parentinfo.code}</h3>
        <h5>My Kids</h5>
        <p>Give your foster kids the family code so they can connect with you!</p>
    
        {listKids}
        {/* <SimpleModal 

    
          buttontext="+ Add New Kid"
          modaltitle="Add A Foster Kid">
           <p>Enter the name of the kid you want to add. </p> 
           <div>
                  <div className="form-group">
                  <label htmlFor="email">Kid Name</label>
                  <input
                    className="form-control"
                    id="email"
                    name="newkidname"
                    type="text"
                    placeholder="Enter first name"
                    value={this.state.newkidname}
                    onChange={this.handleChange}
                    />   
                    
                    <Button color="primary" type="button" onClick={this.handleFormSubmit}> Add</Button>   
                  </div>

            </div>

        </SimpleModal> */}
        
        <Col  size="col s12 m4">
        
          </Col>

          </Col>
    
        </Row>
       
      </Container>
      

      </div>
    );
    }
}


export default ParentPortal;