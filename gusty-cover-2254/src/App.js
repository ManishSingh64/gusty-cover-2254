import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./homepage/loginPage/LoginPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="" element={} /> */}
        {/* <Route path="" element={} /> */}
        {/* <Route path="" element={} /> */}
      </Routes>
    </div>
  );
}

export default App;
