import React, { useState } from "react";
import "./styles.css";
import Fooditems from "./Fooditems";
import Navbar from "./Navbar";
import Welcome from "./Welcome";

function App() {
  const [menu, setmenu] = useState(false);
  function men() {
    setmenu(true);
  }
  return (
    <div className="App">
      <Navbar />
      {menu ? <Fooditems /> : <Welcome men={men} />}
    </div>
  );
}

export default App;
