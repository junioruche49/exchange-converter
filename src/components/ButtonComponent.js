import React from "react";

function ButtonComponent({ convertHandler, loading }) {
  return (
    <button
      onClick={convertHandler}
      className="w-full text-lg font-medium p-4 bg-[green] rounded-lg text-white"
    >
      {loading ? "Loading" : "Convert"}
    </button>
  );
}

export default ButtonComponent;
