import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { AuthContext } from "../../Context/AuthContext";

const Pagination = ({ page, setPage, data, limit, setLimit }) => {
  const {
    state: { currentPage },
  } = useContext(AuthContext);
  const { dispatch } = useContext(AuthContext);
  const border = {
    border: "1px solid black",
  };
  return (
    <Wrapper>
      <ButtonsRow>
        <Button
          disabled={page <= 1}
          onClick={() =>
            dispatch({ type: "setCurrentPage", payload: currentPage - 1 })
          }
          style={border}
        >
          Prev
        </Button>
        <div>Page : {currentPage}</div>
        <Button
          onClick={() =>
            dispatch({ type: "setCurrentPage", payload: currentPage + 1 })
          }
          style={border}
          disabled={data.length < limit}
        >
          Next
        </Button>
      </ButtonsRow>
      <div>
        Limit:
        <select
          onChange={(e) =>
            dispatch({ type: "setPageLimit", payload: e.target.value })
          }
        >
          <option value="3">3</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>
    </Wrapper>
  );
};

export default Pagination;

const Wrapper = styled.div`
  border: 1px solid green;
  display: flex;
  justify-content: space-between;
  margin-left: 30px;
  margin-right: 30px;
`;

const ButtonsRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
