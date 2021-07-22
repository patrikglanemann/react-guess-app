import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import Age from "./pages/age.js";
import Nation from "./pages/nation.js";
import Gender from "./pages/gender.js";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/nation">
          <Nation />
        </Route>
        <Route path="/gender">
          <Gender />
        </Route>
        <Route path="/">
          <Age />
        </Route>
      </Switch>

      <footer>
        <nav className="Footer__navbar">
          <NavLink exact to="/">
            Age
          </NavLink>
          <NavLink to="/nation">Nation</NavLink>
          <NavLink to="/gender">Gender</NavLink>
        </nav>
      </footer>
    </div>
  );
}

export default App;
