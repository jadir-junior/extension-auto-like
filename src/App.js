import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import BioPage from "./pages/BioPage/BioPage";
import HomePage from "./pages/HomePage/HomePage";
import NamePage from "./pages/NamePage/NamePage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import history from "./utils/history";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/settings">
          <SettingsPage />
        </Route>
        <Route path="/names">
          <NamePage />
        </Route>
        <Route path="/bio">
          <BioPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
