import { Link } from "react-router-dom";
import Form from "../../../Components/Form";

export default function Signup() {

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
      <Form onSubmit={onSubmit} inputs={inputs} labels={false} />
      <p>Have an account?</p>
      <Link to="/form/login">Log in</Link>
    </div>
  );
}
