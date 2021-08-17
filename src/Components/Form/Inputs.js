export default function Inputs({ data, setData, inputs, labels }) {
  return (
    <>
      {inputs.map(([label, type], i, _arr, lower = label.toLowerCase()) => (
        <div key={`form1-input${i}`}>
          <label
            style={!labels ? { display: "none" } : {}}
            htmlFor={lower}
          >{`${label}: `}</label>
          <input
            id={lower}
            placeholder={!labels && label}
            value={data[lower]}
            type={type}
            onChange={(e) => {
              setData((data) => ({ ...data, [lower]: e.target.value }));
            }}
          />
        </div>
      ))}
    </>
  );
}
