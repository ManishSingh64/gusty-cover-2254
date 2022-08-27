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
    state: { data, pageLimit },
    dispatch,
  } = useContext(AuthContext);
  console.log("limit", pageLimit);
  const [showEdit, setShowEdit] = useState("");
  const [updatedText, setUpdatedText] = useState("");
  const [updatedDate, setUpdatedDate] = useState();
  const token = localStorage.getItem("token");
  const [page, setPage] = useState(1);
  const handleUpdateTask = (el) => {
    let change = { status: !el.status };
    console.log(change);
    updateTask(el._id, change, dispatch, token);
  };

  const handleDeleteTask = (el) => {
    deleteTask(el, dispatch, token);
    getUserData(dispatch, token, page, pageLimit);
  };

  useEffect(() => {
    getUserData(dispatch, token, page, pageLimit);
  }, [page, pageLimit]);

  const handleEditTask = (el) => {
    let change = { name: updatedText, deadline: updatedDate };
    updateTask(el._id, change, dispatch, token);
    setShowEdit("");
  };

  const border = {
    border: "1px solid black",
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
                  {showEdit == el._id ? (
                    <td>
                      <input
                        type="text"
                        value={updatedText}
                        onChange={(e) => setUpdatedText(e.target.value)}
                        style={border}
                      />
                    </td>
                  ) : (
                    <td style={border}>{el.name}</td>
                  )}

                  <td style={border}>
                    <button onClick={() => handleUpdateTask(el)}>
                      Change Status
                    </button>
                  </td>
                  {el.status ? (
                    <td style={border}>Completed</td>
                  ) : (
                    <td style={border}>Not-Completed</td>
                  )}

                  {showEdit == el._id ? (
                    <td>
                      <input
                        type="date"
                        onChange={(e) => setUpdatedDate(e.target.valueAsNumber)}
                        style={border}
                      />
                    </td>
                  ) : (
                    <td>
                      <ShowTime deadline={el.deadline} />
                    </td>
                  )}
                  <td>
                    {showEdit == el._id ? (
                      <div>
                        <button onClick={() => handleEditTask(el)}>Save</button>
                      </div>
                    ) : (
                      <div>
                        <button onClick={() => handleDeleteTask(el)}>
                          Delete
                        </button>
                        <button
                          onClick={() => {
                            setShowEdit(el._id);
                            setUpdatedText(el.name);
                          }}
                        >
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
          <Pagination page={page} setPage={setPage} data={data} />
        </div>
      </div>
    </div>
  );
};

export default ShowTasks;
