import React from "react";
import "./style.css";
import { Col, Row, Container } from "../components/Grid";

function Jumbotron({ title,subtitle, jumboicon}) {
  return (
    <div className="jumbotron col s12"> 
      <div className="jumboall">
          <div className="jumbotext">
                <div className="jumbotitlepill">
                  <h1 className="jumbotitle">{title}</h1>
                </div>
                <h3 className="subtitle">{subtitle}</h3>
            </div>

          <img className="jumboicon" src={jumboicon}/>
        
      </div>
     </div>

  );
}

export default Jumbotron;
