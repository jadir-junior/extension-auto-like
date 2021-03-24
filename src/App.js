import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./pages/Home/Home";
import Settings from "./pages/Settings/Settings";
import history from "./utils/history";

function App() {
  // const [time, setTime] = useState("500");

  // useEffect(() => {
  //   console.log(time);
  //   sendMessage({ type: "time", data: time }, () => {});
  // }, [time]);

  // const handleTime = (e) => {
  //   setTime(e.target.value);
  // };

  return (
    <Router history={history}>
      <Switch>
        <Route path="/settings">
          <Settings />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
