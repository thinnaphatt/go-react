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
        </div>

        <div className="card">
          <h2>Subjects</h2>
          <Subjects />
        </div>

        <div className="card">
          <h2>Students</h2>
          <Students />
        </div>
      </div>

      <div className="form-container">
        <div className="card">
          <h2>Item Form</h2>
          <ItemFormFind />
        </div>

        <div className="card">
          <h2>Student Form</h2>
          <ItemFormFindStu />
        </div>

        <div className="card">
          <h2>Subject Form</h2>
          <ItemFormFindSub />
        </div>
      </div>
    </div>
  );
}

export default App;
