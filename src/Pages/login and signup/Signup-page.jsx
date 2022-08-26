import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Navigate } from "react-router-dom";

const SignupPage = () => {
  const { state, dispatch } = useContext(AuthContext);

  const [tasks, setTasks] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTasks({ ...tasks, [name]: value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log(tasks);
    registerUser();
  };

  const registerUser = async () => {
    try {
      await axios
        .post("http://localhost:8080/auth/register", tasks)
        .then((data) => {
          dispatch({ type: "signupSuccess", payload: data.data });
        });
    } catch (err) {
      alert(err);
    }
  };

  if (state.isSignuped) {
    return <Navigate to="/login" />;
  }
  return (
    <div>
      <form onSubmit={(e) => handleClick(e)}>
        <input
          type="text"
          placeholder="name"
          name="name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="password"
          name="password"
          onChange={handleChange}
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SignupPage;
