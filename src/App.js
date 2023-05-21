// App.js
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Airdrop from "./pages/Airdrop";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/Airdrop" component={Airdrop} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
