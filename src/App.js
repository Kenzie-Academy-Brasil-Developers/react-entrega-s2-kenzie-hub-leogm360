import { BrowserRouter } from "react-router-dom";

import Router from "./routes/router.jsx";

import { Reset } from "./styles/reset.js";
import { RootVariables } from "./styles/root-variables.js";
import { GlobalStyles } from "./styles/global.js";

const App = () => {
  return (
    <BrowserRouter>
      <Reset />
      <RootVariables />
      <GlobalStyles />

      <Router />
    </BrowserRouter>
  );
};

export default App;
