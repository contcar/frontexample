import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DataTable from "./components/datatable";
import NavBar from "./components/commons/navBar";
import NewCapacity from "./components/capacityCreate";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <div className="container">
        <NewCapacity />
      </div>
    </React.Fragment>
  );
}

export default App;
