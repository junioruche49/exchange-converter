import React from "react";

function TextInputComponent({ setInput, setAmount, value }) {
  return (
    <div className="w-full flex flex-row">
      <div className="w-[40%] flex items-center">
        <h4 className="text-lg">Amount</h4>
      </div>
      <div className="flex flex-1 justify-end">
        <input
          type="number"
          className="flex border border-zinc-400 p-5 w-[60%] rounded-lg"
          onChange={setInput(setAmount)}
          value={value}
          required
        />
      </div>
    </div>
  );
}

export default TextInputComponent;
