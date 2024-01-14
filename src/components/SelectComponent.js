import React from "react";

function SelectComponent({ setInput, setBase, name, value }) {
  return (
    <div className="w-full flex flex-row">
      <div className="w-[60%] flex items-center">
        <h4 className="text-lg">{name}</h4>
      </div>
      <div className="flex flex-1 justify-end my-1">
        <select
          className="border border-zinc-400 py-5 px-8 rounded-lg"
          onChange={setInput(setBase)}
          value={value}
        >
          <option>USD</option>
          <option>EUR</option>
          <option>CAD</option>
          <option>AUD</option>
          <option>GBP</option>
          <option>BGN</option>
          <option>CHF</option>
          <option>CNY</option>
          <option>EGP</option>
          <option>NGN</option>
        </select>
      </div>
    </div>
  );
}

export default SelectComponent;
