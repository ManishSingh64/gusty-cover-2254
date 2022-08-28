import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import { SortDataAPI } from "../Actions";
import { BsSortAlphaDown, BsSortAlphaUpAlt } from "react-icons/bs";
import styled from "styled-components";

const TableHeader = () => {
  const {
    state: {
      sortName,
      sortDeadline,
      currentPage,
      pageLimit,
      sortNameSymbol,
      sortDeadlineSymbol,
    },
    dispatch,
  } = useContext(AuthContext);

  const token = localStorage.getItem("token");
  const handleSortData = () => {
    let key = "name";
    let change = 1;
    if (sortName) {
      change = -1;
    }
    SortDataAPI(dispatch, token, currentPage, pageLimit, key, change);
    dispatch({ type: "changeSortState" });
  };

  const handleSortDeadline = () => {
    let key = "deadline";
    let change = 1;
    if (sortDeadline) {
      change = -1;
    }
    SortDataAPI(dispatch, token, currentPage, pageLimit, key, change);
    dispatch({ type: "changeSortDeadline" });
  };

  const thStyle = {
    border: "1px solid black",
  };

  return (
    <thead style={{ border: "1px solid black" }}>
      <tr>
        <th style={thStyle}>ID</th>
        <th
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5px",
            cursor: "pointer",
          }}
          onClick={() => handleSortData()}
        >
          Name
          {sortNameSymbol ? <BsSortAlphaDown /> : <BsSortAlphaUpAlt />}
        </th>
        <th style={thStyle}>Active</th>
        <th style={thStyle}>Status</th>
        <th
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5px",
            cursor: "pointer",
          }}
          onClick={() => handleSortDeadline()}
        >
          DeadLine
          {sortDeadlineSymbol ? <BsSortAlphaDown /> : <BsSortAlphaUpAlt />}
        </th>
        <th style={thStyle}>Actions</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
