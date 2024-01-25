import ItemsList from "./component/Items";
import Students from "./component/Students";
import Subjects from "./component/Subjects";
import "./App.css";

function App() {
  return (
    <>
    <h1 className="pt-5">My Front-End</h1>
        <div className=" block">
        
        
        <div className="card pl-20 ">
          <ItemsList />
        </div>

      
        <div className="card">
          <Subjects />
        </div>

       
       
        <div className="card">
          <Students />
        </div>
        </div>
        
      
      
    </>
  );
}

export default App;
