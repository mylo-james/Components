import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";

function App() {
  return (
    <Switch>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
    </Switch>
  );
}

export default App;
