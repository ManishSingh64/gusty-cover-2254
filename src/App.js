import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignupPage from "./Pages/login and signup/Signup-page";
import LoginPage from "./Pages/login and signup/LoginPage";
import AddTask from "./Components/Tasks/AddTask";
import TaskApp from "./Components/Tasks/TaskApp";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/tasks" element={<TaskApp />} />
        {/* <Route path="" element={} /> */}
        {/* <Route path="" element={} /> */}
        {/* <Route path="" element={} /> */}
      </Routes>
    </div>
  );
}

export default App;
