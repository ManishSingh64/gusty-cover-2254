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
  /* border: 1px solid black; */
  width: 140%;
  margin-left: -120px;
  margin-top: -90px;
  height: auto;
  background: white;
  padding: 2% 5%;
  border-radius: 20px;
`;
