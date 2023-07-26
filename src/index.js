import React, { useState } from "react";
import ReactDOM from "react-dom";
import { DataProvider } from "./DataProvider";
import { Child1 } from "./Child1";
import { Child2 } from "./Child2";

import "./styles.css";

const App = () => {
  return (
    <DataProvider>
      <h1>Hello!</h1>
      <Consumer />
    </DataProvider>
  );
};

const Consumer = () => {
  const [visi, setVisi] = useState(false);

  return (
    <>
      <Child1 /> <br />
      {visi && <Child2 />}
      <button onClick={() => setVisi(!visi)}>
        {" "}
        click to change child2 visibility
      </button>
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
