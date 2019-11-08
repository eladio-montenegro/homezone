import React from "react";
import "./style.css";
import M from 'materialize-css';


class SideNav extends React.Component{


  componentDidMount(){

    M.Sidenav.init(this.sidenav);
  document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.sidenav');
   let instances = M.Sidenav.init(elems);
  });
}


render(){
  return (
    <div className="sidenav-container">
      

      <nav> HomeZone </nav>

      <ul id="slide-out" class="sidenav">
        <li><div class="user-view">
          <div class="background">
            <img src="images/office.jpg"></img>
          </div>
          <a href="#user"><img class="circle" src="images/yuna.jpg"></img></a>
          <a href="#name"><span class="white-text name">John Doe</span></a>
          <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
        </div></li>
        <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
        <li><a href="#!">Second Link</a></li>
        <li><div class="divider"></div></li>
        <li><a class="subheader">Subheader</a></li>
        <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
      </ul>
      <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>


   </div>
   
          
  );
}

}

export default SideNav;
