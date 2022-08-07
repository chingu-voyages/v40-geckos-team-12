import React from "react";
import { Column } from "./components";

function App() {
  return (
    <div style={{ display: "grid" }}>
      <div>sidebar</div>

      <Column />
      <Column />
      <Column />
    </div>
  );
}

export default App;
