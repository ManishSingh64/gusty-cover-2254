import React, { useContext, useState } from "react";
import { TaskContext } from "../../Context/TaskContext";
import { Crm } from "../../Pages/CRM/Crm";
import form from "../TaskForm/Taskform.module.css";

export const Taskform = ({idx}) => {
  const {task} = useContext(TaskContext)
  const [send, setSend] = useState(false);
  const [inputform, setInputform] = useState({
    deal:'',
    amount:'',
    contact:''
  })

  const handleOnChange = (e) =>{
    const {name, value} = e.target

    setInputform({...inputform,[name] : value})
  }
  const handleOnClick = () =>{
    // console.log(inputform)
    setSend(true);
    task(inputform,idx)
  }
  return (
    <div className={form.formdiv}>
      <p>Name</p>
      <input className={form.nameinput} name='deal' type="text" placeholder="#Deal" onChange={handleOnChange}/>
      <p>Amount and currency</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "94%",
          margin: "auto",
        }}
      >
        <input className={form.currencyinput} name='amount' type="text" placeholder="0.00" onChange={handleOnChange}/>
        <select className={form.selectcurrency} name="" id="" value="...">
          <option value="Indian Ruppee">Indian Rupee</option>
          <option value="US Dollar">US Dollar</option>
          <option value="Euro">Euro</option>
        </select>
      </div>
      <p>Contact</p>
      <input className={form.Contact} name='contact' type="text" placeholder="Contact Name" onChange={handleOnChange}/>
      <div style={{ width: "60%", marginTop: "5px" }}>
        <button className={form.save} onClick={handleOnClick}>Save</button>
        <button className={form.cancel}>Cancel</button>
      </div>
      
    </div>
  );
};
