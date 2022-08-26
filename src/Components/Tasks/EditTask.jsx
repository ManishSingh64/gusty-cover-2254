import React, { useState } from "react";

const EditTask = ({ el }) => {
  const [editedValue, setEditedValue] = useState(el);
  const { name } = editedValue;

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setEditedValue({ ...editedValue, [name]: value });
  };

  const handleSubmitChange = () => {
    console.log(editedValue);
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => handleUpdateChange(e)}
      />
      <button onClick={() => handleSubmitChange()}>Submit</button>
    </div>
  );
};

export default EditTask;
