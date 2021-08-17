import { Route, Switch, useRouteMatch } from "react-router-dom";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
export default function Form() {
  console.log("form");
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.url}/signup`}>
        <Signup />
      </Route>
      <Route path={`${match.url}/login`}>
        <Login />
      </Route>
    </Switch>
  );
}
