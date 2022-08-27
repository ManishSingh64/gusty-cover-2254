import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignupPage from "./Pages/login and signup/Signup-page";
import LoginPage from "./Pages/login and signup/LoginPage";
import { Crm } from "./Pages/CRM/Crm";
import TaskApp from "./Components/Tasks/TaskApp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/crm" element={<Crm />} />
        <Route path="/tasks" element={<TaskApp />} />
      </Routes>
    </div>
  );
}

export default App;
