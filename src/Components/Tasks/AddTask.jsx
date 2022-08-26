import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";

const AddTask = () => {
  const { state } = useContext(AuthContext);
  const [userData, setuserData] = useState([]);
  //   console.log("name", name);
  const [taskData, setTaskData] = useState();
  const token = localStorage.getItem("token");
  const name = localStorage.getItem("name");

  const handleAddTask = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };
  const handleSubmitTask = async () => {
    try {
      await axios
        .post("http://localhost:8080/usertasks", taskData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((data) => {
          alert("done");
          //   dispatch({ type: "loginSuccess", payload: data.data });
        });
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/usertasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => setuserData(data.data.jobs));
  }, []);

  return (
    <div>
      <div>
        <h2>Name: {name}</h2>
      </div>
      <form action="" onSubmit={(e) => e.preventDefault()}>
        <input type="text" name="name" onChange={handleAddTask} />
        <button onClick={() => handleSubmitTask()}>Add Task</button>
      </form>
      <div>
        <h2>Your Tasks are here</h2>
        {userData.map((el, index) => {
          return <div key={index}>{el.name}</div>;
        })}
      </div>
    </div>
  );
};

export default AddTask;
