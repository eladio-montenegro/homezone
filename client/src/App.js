import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";

import SideNav from "./components/SideNav";
import ParentSignUp from "./pages/ParentSignUp";
import ParentPortal from "./pages/ParentPortal";
import ParentPortalEdit from "./pages/ParentPortalEdit";
import KidSignUp from "./pages/KidSignUp";
import Login from "./pages/Login";
import ChildView from "./components/ChildView";
import KidPortal from "./pages/KidPortal";
import KidJournal from "./pages/KidJournal";
import KidHomes from "./pages/KidHomes";

function App() {

  return (
    <Router>
      <div>
       
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/home" component={Homepage} />
          <Route exact path="/parentsignup" component={ParentSignUp}/>
          <Route exact path="/parentportal" component={ParentPortal}/>
          <Route exact path="/parentportal/kidportal/:id" component={KidPortal}/>
          <Route exact path="/editparentportal" component={ParentPortalEdit}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/kidsignup" component={KidSignUp}/>
          <Route exact path="/kidportal/" component={KidPortal}/>
          <Route exact path="/kidjournal/" component={KidJournal}/>
          <Route exact path="/kidhomes/" component={KidHomes}/>
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
