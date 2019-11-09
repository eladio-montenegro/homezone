import React from "react";
import "./style.css";
import M from 'materialize-css';


class SideNav extends React.Component{

  openNav = () => {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
   closeNav = () =>  {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }



  componentDidMount(){

   
  };



render(){
  return (
    <div class="sidenav-container">
      

      <div id="mySidebar" class="sidebar">
      <div class="user-view">
      <div class="background">
        <img class="circle" src="https://www.bluemaumau.org/sites/default/files/default_images/default.png" height="100px" width="100px"></img>
      </div>

       <p><span class="white-text name">John Doe</span></p>
       <p><span class="white-text email">jdandturk@gmail.com</span></p>
       </div>


      <a href="javascript:void(0)" class="closebtn" onClick={this.closeNav}>&times;</a>
      <a href="#">Edit Profile</a>
      <a href="#">Kid 1</a>
      <a href="#">Kid 2</a>
      <a href="#">Kid 3</a>
    </div>

    <div id="main">
      <button class="openbtn" onClick={this.openNav}>&#9776; Menu</button> 

    </div>

    </div>
   
          
  );
}

}

export default SideNav;
