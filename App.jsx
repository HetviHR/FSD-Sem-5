import React from "react";
import Demo1 from "/components/Demo1";
import Demo2 from "/components/Demo2";
import Message from "/components/Message";

const App = () => {
  return (
    <div>
      <h2>Main App Component</h2>

      <Demo1 dept="CSE" institute="CHARUSAT" var1="AI & ML" />
      <Demo2 dept="CSPIT" institute="CHARUSAT" />
      <Message />
    </div>
  );
};

export default App;
