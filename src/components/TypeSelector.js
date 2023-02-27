const TypeSelector = ({ qtype, setQtype }) => {
  return (
    <>
      <div className="select">
        <select
          className=""
          value={qtype}
          onChange={(event) => {
            let type = parseInt(event.target.value);
            setQtype(type);
          }}
        >
          <option value="0">Choose Question Type</option>
          <option value="1">Multi-Select</option>
          <option value="2">Single-Select</option>
        </select>
      </div>
    </>
  );
};

export default TypeSelector;
