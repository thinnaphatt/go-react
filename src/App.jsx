import React from "react";
import "./App.css";
import ItemsList from "./component/Items";
import Students from "./component/Students";
import Subjects from "./component/Subjects";
import ItemFormFind from "./component/itemFormfile";
import ItemFormFindStu from "./component/studentFormfile";
import ItemFormFindSub from "./component/subjectFormfile";

function App() {
  return (
    <div className="app-container">
      <h1 className="app-header">My Front-End</h1>

      <div className="card-container">
        <div className="card">
          <h2>Items List</h2>
          <ItemsList />
          <ItemFormFind />
        </div>

        <div className="card">
          <h2>Subjects</h2>
          <Subjects />
          <ItemFormFindSub />
        </div>

        <div className="card">
          <h2>Students</h2>
          <Students />
          <ItemFormFindStu />
        </div>
      </div>
    </div>
  );
}

export default App;
