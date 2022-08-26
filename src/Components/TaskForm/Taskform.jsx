import React from "react";
import form from "../TaskForm/Taskform.module.css";

export const Taskform = () => {
  return (
    <div className={form.formdiv}>
      <p>Name</p>
      <input className={form.nameinput} type="text" placeholder="#Deal" />
      <p>Amount and currency</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "94%",
          margin: "auto",
        }}
      >
        <input className={form.currencyinput} type="text" placeholder="0.00" />
        <select className={form.selectcurrency} name="" id="" value="...">
          <option value="Indian Ruppee">Indian Rupee</option>
          <option value="US Dollar">US Dollar</option>
          <option value="Euro">Euro</option>
        </select>
      </div>
      <p>Contact</p>
      <input className={form.Contact} type="text" placeholder="Contact Name" />
      <div style={{ width: "60%", marginTop: "5px" }}>
        <button className={form.save}>Save</button>
        <button className={form.cancel}>Cancel</button>
      </div>
    </div>
  );
};
