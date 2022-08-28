import React from "react";
import AddTask from "./AddTask";
import AddTaskModal from "./AddTaskModal";
import ShowTasks from "./ShowTasks";
import styled from "styled-components";

const TaskApp = () => {
  return (
    <Wrapper>
      {/* <AddTask /> */}
      <AddTaskModal />
      <ShowTasks />
    </Wrapper>
  );
};

export default TaskApp;

const Wrapper = styled.div`
  border: 2px solid black;
  width: 50%;
  margin: auto;
  height: auto;
`;
