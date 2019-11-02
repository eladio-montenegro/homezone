import React from "react";
import "./style.css";

function ImageCard({ title,imagesrc,content,action,link}) {
  return (
  
    <div className="col m4 s6">
      <div class="card">
        <div class="card-image">
          <img src={imagesrc}/> 
          <span class="card-title">{title}</span>
          </div>
        <div class="card-content">
          <p>{content}</p>
        </div>
        <div class="card-action">
          <a href={link}>{action}</a>
        </div>
      </div>
    </div>
  

  );
}

export default ImageCard;
