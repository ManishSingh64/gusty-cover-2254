import React from "react";
import crm from "../CRM/Crm.module.css";

export const Crm = () => {
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

      </div>
    </div>
  );
};
