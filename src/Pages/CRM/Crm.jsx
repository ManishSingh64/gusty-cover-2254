import React from "react";
import { useState } from "react";
import { Taskform } from "../../Components/TaskForm/Taskform";
import crm from "../CRM/Crm.module.css";

const tasks = [
  { name: "new" },
  { name: "Name" },
  { name: "Name1" },

  { name: "Create papers" },
  { name: "Invoioce" },
];

export const Crm = () => {
  const [openform, setOpenform] = useState(false);
  const handleOnClick = (el, i) => {
    setOpenform(!openform);
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].name === el.name) {
        tasks[i].form = <Taskform />;
      } else {
        tasks[i].form = null;
      }
    }
  };
  return (
    <div className={crm.main}>
      <div className={crm.topnav}>
        <div className={crm.topnav1}>
          <p>Kanban</p>
          <p>List</p>
          <p>Calender</p>
        </div>
        <div className={crm.topnav2}>
          <div>
            <p>With activities</p>
          </div>
          <div>
            <p>For today</p>
          </div>
          <div>
            <p>Overdue</p>
          </div>
        </div>
        <div className={crm.topnav3}>
          <div className={crm.extensions}>
            <div>
              <p>Extensions</p>
            </div>
            <div>
              <select name="" id=""></select>
            </div>
          </div>
          <div className={crm.auto}>
            <div>
              <p>Automation rules</p>
            </div>
          </div>
        </div>
      </div>
      <div className={crm.body}>
        {tasks.map((el, i) => (
          <div className={crm.task}>
            <div className={crm.taskheader}>
              <h3>{el.name}</h3>
            </div>
            <div className={crm.ruppee}>
              <h1>Rs. 0</h1>
            </div>
            <div className={crm.addbutton}>
              <button className={crm.add} onClick={() => handleOnClick(el, i)}>
                +
              </button>
            </div>
            <div>{openform && el.form}</div>

          </div>
        ))}
        {/* {openform && <Taskform />} */}
      </div>
    </div>
  );
};
