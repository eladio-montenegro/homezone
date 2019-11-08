import React from "react";
import "./style.css";


function Nav() {
  return (
    <div className="nav-with-sidenav">
      <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">HomeZone</a>
        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="menuicon material-icons">menu</i></a>
        <ul className="right hide-on-med-and-down">
          <li><a href="collapsible.html">Login</a></li>
        </ul>
      </div>
    </nav>

    <ul className="sidenav" id="mobile-demo">
      <li><a href="collapsible.html">Login</a></li>
    </ul>

   </div>
          
  );
}

export default Nav;
