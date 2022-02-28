import { Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Signup from "../pages/Signup/index.jsx";
import Login from "../pages/Login/index.jsx";
import Dashboard from "../pages/Dashboard/index.jsx";

const Router = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@kenziehub:token");

    if (token) {
      setIsAuthenticated(true);
    }
  }, [isAuthenticated]);

  return (
    <Switch>
      <Route exact path="/">
        <Login
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
      </Route>

      <Route path="/signup">
        <Signup isAuthenticated={isAuthenticated} />
      </Route>

      <Route path="/dashboard/:id">
        <Dashboard
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
      </Route>
    </Switch>
  );
};

export default Router;
