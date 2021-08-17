import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Form from "./Pages/FormExample";

function App() {
  return (
    <Switch>
      <Route path="/form">
        <Form />
      </Route>
    </Switch>
  );
}

export default App;
