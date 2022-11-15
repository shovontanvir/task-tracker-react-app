import React from "react";

const Button = (props) => {
  return (
    <button
      className={`border px-8 rounded-sm py-2 mx-3 hover:px-10 transition-all ease-in-out duration-500 ${props.btnClass}`}
    >
      {props.action}
    </button>
  );
};

export default Button;
