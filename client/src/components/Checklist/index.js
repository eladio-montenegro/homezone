import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function CheckList({ children }) {
  return (
    <div className="checklist-overflow-container">
      <ul className="checklist-group">{children}</ul>
    </div>
  );
}

export function CheckListItem({ children, color }) {
  return <li className="checklist-group-item"><i class={color +" checkcircleicon tiny material-icons "}>check_circle</i>{children} </li>;
}
