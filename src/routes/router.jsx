import { Switch, Route } from "react-router-dom";

import Signup from "../pages/Signup/index.jsx";
import Login from "../pages/Login/index.jsx";
import Dashboard from "../pages/Dashboard/index.jsx";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Signup />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
};

export default Router;
