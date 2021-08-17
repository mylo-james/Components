import { useHistory } from "react-router-dom";
import Form from "../../../Components/Form";

export default function Login() {
  const history = useHistory();
  
  const onSubmit = (data) => {
    window.alert(data);
  };
  const inputs = [
    ["Username", "username"],
    ["Password", "password"],
  ];
  return (
    <div>
      <h1>Log in</h1>
      <Form onSubmit={onSubmit} inputs={inputs} />
      <button onClick={() => history.push("/signup")}>Signup</button>
    </div>
  );
}
