import React from "react";
import "./style.css";
// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ fluid, children, backcolor, margin, tall }) {
  return <div className={`row${fluid ? "-fluid" : ""}` + " " + backcolor + " " + margin + " " + tall}>{children}</div>;
}


export function Col({ size, offset, children, margin }) {
  return (
    <div className={size + " " + offset + " " + margin || ''}>
      {children}
    </div>
  );
}
