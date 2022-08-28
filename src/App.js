import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignupPage from "./Pages/login and signup/Signup-page";
import LoginPage from "./Pages/login and signup/LoginPage";
import { Crm } from "./Pages/CRM/Crm";
import TaskApp from "./Components/Tasks/TaskApp";

import Homepage from "./Pages/HomePage/Homepage";
import Dashborad from "./Components/Dashboard/Dashborad";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* <Route path="/crm" element={<Crm />} /> */}
        <Route path="/tasks" element={<TaskApp />} />
        <Route path="/dashboard" element={<Dashborad />} />
        {/* <Route path="/dashboard/crm" element={<Crm/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
