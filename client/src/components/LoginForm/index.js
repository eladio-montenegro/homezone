import React from "react";
import API from "../../utils/API.js";
import "./style.css";
import Button from "../CustomButtons/Button.js";




class LoginForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      username:"",
      password:"",
      selectedUser:{},
      kidUser:{}
    }
  }


  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })    
  }

   
  handleSubmit = event => {
    event.preventDefault();
    //enter login info here
    const {username,password} = this.state;

        //parent login 
    if (this.state.username && this.state.password) {
      let gotit=false;
      //you can put api calls here
      console.log("they exist!");
      API.getParents()
      .then( res => {

          this.setState();
          //for loop, same response to new array 
          let parentArray = res.data;

          var i;
          for (i = 0; i < parentArray.length; i++) {
            if( parentArray[ i ].username === this.state.username ){
              this.state.selectedUser = parentArray[ i ];
          console.log (this.state.selectedUser);
          gotit=true;

          localStorage.clear();
          localStorage.setItem("id", parentArray[i]._id);
          
          window.location.href = "/parentportal";
          }
        
          }

          if(gotit===false){

            this.kidLogin(); 
          };
          
          
      }) 

      .catch(err => console.log(err));
  }
}

kidLogin =()=> {

  API.getKids()
  .then(  res => {

     console.log ("all the kids"+ res.data);
 
     let kidArray = res.data;

     var j;
     for (j = 0; j < kidArray.length; j++) {
       if(kidArray[j].username === this.state.username ){
         this.state.kidUser = kidArray[ j ];
         
         localStorage.clear();
         localStorage.setItem("kidid", kidArray[j]._id);
            
            window.location.href = "/KidPortal";

       }
       else{console.log("couldn't log in");}
      
      
      
      
      }

        });
}
  

  
  render() {    
    return (
      <React.Fragment>
        <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          className="form-control"
          id="username"
          name="username"
          type="text"
          placeholder="Enter username"
          value={this.state.username}
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
          value={this.state.password}
          onChange={this.handleChange}
        />
      </div>
      <div style={{marginTop:"30px"}} >
      <Button color="primary" type="button" onClick={this.handleSubmit}> SAVE</Button>
      <div id="notice" style={{display:"none"}}><h3>Profile Saved!</h3></div>
      </div>
      
      </React.Fragment>

      
    );
  }
}




export default LoginForm;
