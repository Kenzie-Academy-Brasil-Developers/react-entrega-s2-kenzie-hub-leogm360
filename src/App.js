import { Reset } from "./styles/reset.js";
import { RootVariables } from "./styles/root-variables.js";
import { GlobalStyles } from "./styles/global.js";

import Login from "./pages/Login/index.jsx";
import Signup from "./pages/Signup/index.jsx";
import Dashboard from "./pages/Dashboard/index.jsx";

const App = () => {
  return (
    <>
      <Reset />
      <RootVariables />
      <GlobalStyles />

      <Dashboard />
    </>
  );
};

export default App;
