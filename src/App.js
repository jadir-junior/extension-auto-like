import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Bio from "./pages/Bio/Bio";
import Home from "./pages/Home/Home";
import Name from "./pages/Name/Name";
import Settings from "./pages/Settings/Settings";
import history from "./utils/history";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/names">
          <Name />
        </Route>
        <Route path="/bio">
          <Bio />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
