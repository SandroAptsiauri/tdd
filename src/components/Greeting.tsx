import React from "react";

const Greeting: React.FC<any> = ({ name }) => {
  return <h1>Hello, {name || "Guest"}!</h1>;
};

export default Greeting;
