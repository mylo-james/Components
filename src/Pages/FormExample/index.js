import FormExample from "./FormExample";
import styled from "styled-components";
const FormExampleSty = styled.div`
  justify-self: center;
  width: 50%;
  display: flex;
  justify-content: center;
`;

export default function FormIndex() {
  return (
    <FormExampleSty>
      <FormExample />
    </FormExampleSty>
  );
}
