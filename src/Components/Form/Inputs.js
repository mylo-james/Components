export default function Inputs({ data, setData, inputs }) {
  return (
    <>
      {inputs.map(([label, type], i, _arr, lower = label.toLowerCase()) => (
        <div key={`form1-input${i}`}>
          <label htmlFor={lower}>{`${label}: `}</label>
          <input
            id={lower}
            placeholder={lower}
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
