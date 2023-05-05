import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// components
import Sidebar from "./Components/Sidebar";
import Navigations from "./Components/Navigations";

const App = () => {
  const [show, setShow] = useState(false);
  console.log(show , "slkhdlsahk")
  const handleDataChange = (newData) => {
    setShow(newData);
  };
  return (
    <>
      <div className="layout">
        <div className={`sideBar ${show ? "active" : ""}`}>
          <Sidebar onDataChanged={handleDataChange} />
        </div>
        <div className="mainContent">
          <Navigations />
        </div>
      </div>
    </>
  );
};

export default App;
