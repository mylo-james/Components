import { useState } from "react";
import Inputs from "./Inputs";

export default function Form({ onSubmit, inputs }) {
  let [data, setData] = useState(
    inputs.reduce((obj, [label]) => {
      obj[label.toLowerCase()] = "";
      return obj;
    }, {})
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(JSON.stringify(data));
      }}
    >
      <Inputs data={data} setData={setData} inputs={inputs} />
      <button type="submit">Submit</button>
    </form>
  );
}
