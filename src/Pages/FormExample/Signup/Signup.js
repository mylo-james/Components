import { useHistory } from "react-router-dom";
import Form from "../../../Components/Form";

export default function Signup() {
  const history = useHistory();

  const onSubmit = (data) => {
    window.alert(data);
  };

  const inputs = [
    ["Name", "text"],
    ["Username", "text"],
    ["Password", "password"],
    ["Confirm Password", "password"],
  ];

  return (
    <div>
      <h1>Sign Up</h1>
      <Form onSubmit={onSubmit} inputs={inputs} />
      <button onClick={() => history.push("/form/login")}>Log in</button>
    </div>
  );
}
