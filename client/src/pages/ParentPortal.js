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

import Button from "../components/CustomButtons/Button.js";
import SimpleModal from "../components/SimpleModal";



class ParentPortal extends Component  {

 

  state = {
    parentid: "5dcb7c2ae29e574990b935ee",
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
    
  }

  loadParent= () => {
    this.setState({ fosterkids: [] });
    
      API.getParent("5dcb7c2ae29e574990b935ee")
      .then(  res => {

          this.setState({parentinfo:res.data});
          
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
  
      })
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
    let listKids= this.state.fosterkids.map((item, i) =>  

    
    <Col  size="col s12 m4" key={i}>
     
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
        <h1>{this.state.parentinfo.firstname}'s HomeZone</h1>
        <h3>Family Code: {this.state.parentinfo.code}</h3>
        <h2>My Kids</h2>
        <p>Add new kids here and give them your family code so they can connect with you.</p>
    
        {listKids}
        <SimpleModal 
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