import React from "react";

const Demo1 = (props) => {
  const { dept, institute, var1 } = props;

  return (
    <div>
      <h1>Welcome -- {dept}, {institute}, {var1}</h1>
    </div>
  );
};

export default Demo1;
