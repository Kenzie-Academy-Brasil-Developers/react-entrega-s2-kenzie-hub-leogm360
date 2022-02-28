import { Switch, Route } from "react-router-dom";

import Signup from "../pages/Signup/index.jsx";
import Login from "../pages/Login/index.jsx";
import Dashboard from "../pages/Dashboard/index.jsx";

const Router = ({ token }) => {
  return (
    <Switch>
      <Route exact path="/">
        <Login token={token} />
      </Route>

      <Route path="/signup">
        <Signup token={token} />
      </Route>

      <Route path="/dashboard/:id">
        <Dashboard token={token} />
      </Route>
    </Switch>
  );
};

export default Router;
