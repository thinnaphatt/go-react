import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./App.css";
import ItemsList from "./component/Items";
import Students from "./component/Students";
import Subjects from "./component/Subjects";
import ItemFormFind from "./component/itemFormfile";
import ItemFormFindStu from "./component/studentFormfile";
import ItemFormFindSub from "./component/subjectFormfile";
import SignIn from './component/signIn';
import Register from './component/Register';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
     <Router>
      <div>
        <h3>My Project</h3>
        
        <nav>
            <Link to="/">หน้าหลัก</Link>
           
            <hr />
            {!isLoggedIn && (
                <Link to="/signin">เข้าสู่ระบบ</Link>
            )}
            <hr />
            {!isLoggedIn && (
                <Link to="/Register">สมัครสมาชิก</Link>
            )}
        </nav>

        {/* Add the Routes component to the App */}
        {/* <> xxx </>คือตำแหน่งที่ข้อมูลจาก Component คือค่ามา */}
        <Routes>
          <Route path="/signin" element={<SignIn onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/Register" element={<Register/>} />
         
          <Route path="/" element={
            <> 
              <div className="card">
                {isLoggedIn ? (
                  <>
                    <p>ยินดีต้อนรับ</p>
                    <p><ItemsList/></p>
                    <p><ItemFormFind/></p>
                    <hr/>
                    <p><Students/></p>
                    <p><ItemFormFindStu/></p>
                    <hr/>
                    <p><Subjects/></p>
                    <p><ItemFormFindSub/></p>
                    <hr/>
                   
                  </>
                ) : (
                  <p>กรุณา Login </p>
                )}
              </div>
            </>
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
