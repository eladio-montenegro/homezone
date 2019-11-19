import React from "react";
import "./style.css";


function Nav() {
  return (
    <div className="nav-with-sidenav">
      <nav>
      <div className="nav-wrapper">
        <a href="/home" className="brand-logo">HomeZone</a>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="menuicon material-icons">menu</i></a>
        <ul className="right hide-on-med-and-down">
          <li><a href="/login">Login</a></li>
          <li> <a href="/home" onclick="myFunction();">Logout</a>



    </li>
        </ul>
      </div>
    </nav>

    <ul className="sidenav" id="mobile-demo">
      <li><a href="/login">Login</a></li>
      <li><a href="/home">Logout</a></li>   
    </ul>

   </div>
          
  );

  function myFunction() {
    localStorage.clear()}

}

// if (window.location.href != "http://www.homezoneapp.com/" && window.location.href != "https://homezonejle.herokuapp.com/home")
//  {
//  document.write('<button onclick=document.location.href="/home">logout</button>');}




export default Nav;
