import React from "react";

const Layout = (props) => {
  return (
    <div className="bg-stone-600 text-center px-5 py-16 font-brand min-h-screen">
      {props.children}
    </div>
  );
};

export default Layout;
