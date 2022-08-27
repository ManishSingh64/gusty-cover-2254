import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import { SortDataAPI } from "../Actions";

const TableHeader = () => {
  const {
    state: { sortName, sortDeadline },
    dispatch,
  } = useContext(AuthContext);

  const token = localStorage.getItem("token");

  const handleSortData = () => {
    let key = "name";
    let change = 1;
    if (sortName) {
      change = -1;
    }
    SortDataAPI(dispatch, token, key, change);
    dispatch({ type: "changeSortState" });
  };

  const handleSortDeadline = () => {
    let key = "deadline";
    let change = 1;
    if (sortDeadline) {
      change = -1;
    }
    SortDataAPI(dispatch, token, key, change);
    dispatch({ type: "changeSortDeadline" });
  };

  return (
    <thead>
      <tr>
        <th>ID</th>
        <th onClick={() => handleSortData()}>Name</th>
        <th>Active</th>
        <th>Status</th>
        <th onClick={() => handleSortDeadline()}>DeadLine</th>
        <th>Delete</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
