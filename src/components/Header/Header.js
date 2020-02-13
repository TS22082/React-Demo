import React from "react";

function Header(props) {
  return (
    <div className="jumbotron rounded-0">
      <div className="col-8 offset-2">
        <h1 className="text-center ">Forms with React</h1>
        {props.children}
      </div>
    </div>
  );
}

export default Header;
