import React from "react";
import "./style.css";
import M from "materialize-css";



function ImgCarasol({ title1, img1,title2, img2, title3,img3 }) {


  // componentDidMount(){ 
  //   var elems = document.querySelectorAll('.slider');
  //   var instances = M.Slider.init(elems, options);
  // }

  return (
  <div className="slider">
  <ul class="slides">
    <li>
      <img src={img1}/> 
      <div class="caption center-align">
        <h3>{title1}</h3>
        <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
      </div>
    </li>
    <li>
      <img src={img2}/> 
      <div class="caption center-align">
        <h3>{title2}</h3>
        <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
      </div>
    </li>
    <li>
      <img src={img3}/> 
      <div class="caption center-align">
        <h3>{title3}</h3>
        <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
      </div>
    </li>
  </ul>
</div>




  );
  }


export default ImgCarasol;
