import { BrowserRouter } from "react-router-dom";
import { useState } from "react";

import Router from "./routes/router.jsx";

import { Reset } from "./styles/reset.js";
import { RootVariables } from "./styles/root-variables.js";
import { GlobalStyles } from "./styles/global.js";

const App = () => {
  const [token] = useState(
    !!localStorage.getItem("@kenziehubtoken")
      ? localStorage.getItem("@kenziehubtoken")
      : ""
  );

  return (
    <BrowserRouter>
      <Reset />
      <RootVariables />
      <GlobalStyles />

      <Router token={token} />
    </BrowserRouter>
  );
};

export default App;
