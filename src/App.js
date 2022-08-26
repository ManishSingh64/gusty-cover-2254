import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignupPage from "./Pages/login and signup/Signup-page";
import LoginPage from "./Pages/login and signup/LoginPage";
import AddTask from "./Components/Tasks/AddTask";
import { Crm } from "./Pages/CRM/Crm";
import { Taskform } from "./Components/TaskForm/Taskform";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/tasks" element={<AddTask />} />
        <Route path="/crm" element={<Crm/>} />
        {/* <Route path="/taskform" element={<Taskform/>} /> */}
        {/* <Route path="" element={} /> */}
      </Routes>
    </div>
  );
}

export default App;
