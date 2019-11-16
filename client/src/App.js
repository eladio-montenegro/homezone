import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import SideNav from "./components/SideNav";
import ParentSignUp from "./pages/ParentSignUp";
import ParentPortal from "./pages/ParentPortal";
import ParentPortalEdit from "./pages/ParentPortalEdit";
import KidSignUp from "./pages/KidSignUp";
import Login from "./pages/Login";
import ChildView from "./components/ChildView";
import KidPortal from "./pages/KidPortal";

function App() {

  return (
    <Router>
      <div>
       <Nav/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/home" component={Homepage} />
          <Route exact path="/parentsignup" component={ParentSignUp}/>
          <Route exact path="/parentportal" component={ParentPortal}/>
          <Route exact path="/editparentportal" component={ParentPortalEdit}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/kidsignup" component={KidSignUp}/>
          <Route exact path="/kidportal" component={KidPortal}/>
          <Route exact path="/books" component={Books}/>
          <Route exact path="/books/:id" component={Detail}/>
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
