import { useHistory } from "react-router-dom";
import Form from "../../../Components/Form";

export default function Login() {
  const history = useHistory();
  //Defining and onSubmit function for the Form Component
  const onSubmit = (data) => {
    window.alert(data);
  };
  //Defining an inputs array for the Form Component
  const inputs = [
    ["Username", "username"],
    ["Password", "password"],
  ];
  
  return (
    <div>
      <h1>Log in</h1>
      <Form onSubmit={onSubmit} inputs={inputs} />
      <button onClick={() => history.push("/form/signup")}>Signup</button>
    </div>
  );
}
