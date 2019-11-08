import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function CTABtn({ children }) {
  return (
    <a class="waves-effect waves-light btn-large">{ children }</a>
  );
}

export default  CTABtn;
