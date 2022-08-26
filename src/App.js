import logo from "./logo.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/HomePage/Landingpage/Homepage";
import LoginPage from "./Pages/HomePage/loginPage/LoginPage";

function App() {
  return (
    <div className="App">
      {/* <LoginPage /> */}
      {/* <Homepage /> */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="" element={} />
        <Route path="" element={} />
        <Route path="" element={} /> */}
      </Routes> 
    </div>
  );
}

export default App;
