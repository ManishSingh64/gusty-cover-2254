import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { deleteTask, getUserData, updateTask } from "./Actions";
import { ShowTime } from "./Static/DateConverter";
import TableHeader from "./Static/TableHeader";

const ShowTasks = () => {
  const {
    state: { data },
    dispatch,
  } = useContext(AuthContext);
  const [userData, setuserData] = useState([]);
  const token = localStorage.getItem("token");

  const handleUpdateTask = (el) => {
    updateTask(el, dispatch, token);
  };

  const handleDeleteTask = (el) => {
    deleteTask(el, dispatch, token);
  };

  useEffect(() => {
    getUserData(dispatch, token);
  }, []);

  const border = {
    border: "1px solid black",
  };
  return (
    <div>
      <div>
        <h2>Your Tasks are here</h2>
        <table>
          <TableHeader />
          <tbody>
            {data.map((el, index) => {
              return (
                <tr key={index} style={border}>
                  <td>{index + 1}</td>
                  <td style={border}>{el.name}</td>
                  <td style={border}>
                    <button onClick={() => handleUpdateTask(el)}>
                      Change Status
                    </button>
                  </td>
                  {el.status ? (
                    <td style={border}></td>
                  ) : (
                    <td style={border}>Not-Completed</td>
                  )}

                  <td>
                    <ShowTime deadline={el.deadline} />
                  </td>
                  <td>
                    <button onClick={() => handleDeleteTask(el)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowTasks;
