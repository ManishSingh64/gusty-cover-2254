import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { deleteTask, getUserData, updateTask } from "./Actions";
import EditTask from "./EditTask";
import Pagination from "./Pagination";
import { ShowTime } from "./Static/DateConverter";
import TableHeader from "./Static/TableHeader";

const ShowTasks = () => {
  const {
    state: { data },
    dispatch,
  } = useContext(AuthContext);
  const [userData, setuserData] = useState([]);
  const [showEdit, setShowEdit] = useState("");
  const [updatedText, setUpdatedText] = useState("");
  const token = localStorage.getItem("token");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const handleUpdateTask = (el) => {
    updateTask(el, dispatch, token);
  };

  const handleDeleteTask = (el) => {
    deleteTask(el, dispatch, token);
  };

  // const handlePageChange = (e) => {
  //   console.log(e.target.value);
  //   getUserData(e.target.value, dispatch, token);
  // };

  useEffect(() => {
    getUserData(dispatch, token, page, limit);
  }, [page, limit]);
  const border = {
    border: "1px solid black",
  };

  const handleEditTask = (el) => {
    console.log(updatedText);
    console.log(el._id);
    setShowEdit("");
  };

  return (
    <div>
      <div>
        <h2>Your Tasks are here</h2>
        <table style={{ margin: "auto", marginBottom: "5rem" }}>
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
                    {showEdit == el._id ? (
                      <div>
                        <input
                          type="text"
                          value={updatedText}
                          onChange={(e) => setUpdatedText(e.target.value)}
                        />
                        <button onClick={() => handleEditTask(el)}>Save</button>
                      </div>
                    ) : (
                      <div>
                        <button onClick={() => handleDeleteTask(el)}>
                          Delete
                        </button>
                        <button onClick={() => setShowEdit(el._id)}>
                          Edit
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div>
          <Pagination
            page={page}
            setPage={setPage}
            data={data}
            limit={limit}
            setLimit={setLimit}
          />
        </div>
      </div>
    </div>
  );
};

export default ShowTasks;
