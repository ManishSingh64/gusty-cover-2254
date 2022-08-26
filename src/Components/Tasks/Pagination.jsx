import React from "react";

const Pagination = ({ page, setPage, data, limit, setLimit }) => {
  const border = {
    border: "1px solid black",
  };
  return (
    <div>
      <div>
        <button
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
          style={border}
        >
          Prev
        </button>
        <div>Page : {page}</div>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          style={border}
          disabled={data.length < limit}
        >
          Next
        </button>
      </div>
      <div>
        Limit:
        <select name="" id="" onChange={(e) => setLimit(e.target.value)}>
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>
    </div>
  );
};

export default Pagination;
