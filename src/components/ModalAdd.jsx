import React, { useState } from "react";

const AddModal = ({ modalAddOpen, setModalOpen, setDataEst }) => {
  const [value, setValue] = useState(1);
  const [title, setTitle] = useState("");

  const increase = () => setValue((prev) => prev + 1);
  const decrease = () => setValue((prev) => (prev > 1 ? prev - 1 : 1));

  if (!modalAddOpen) return null;

  const handleSaveAdd = () => {
    if (title.trim() === "") return; // Bo'sh title kiritilishiga yo'l qo'ymaslik

    setDataEst((prevData) => [
      ...prevData,
      {
        id: prevData.length + 1,
        check: false, // Yangi task bajarilmagan holda boshlanadi
        title,
        estnumber: value,
      },
    ]);
    setModalOpen(false);
    setTitle(""); // Formani tozalash
    setValue(1);
  };

  return (
    <div className="modal">
      <input
        className="inp-title"
        type="text"
        placeholder="What are you working on?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>Est Pomodoros</label>
      <div className="number-input">
        <input
          type="number"
          min="1"
          value={value}
          onChange={(e) => setValue(Math.max(1, Number(e.target.value)))}
        />
        <button onClick={increase}>
          <img src="https://pomofocus.io/icons/caret-up.png" alt="increase" />
        </button>
        <button onClick={decrease}>
          <img src="https://pomofocus.io/icons/caret-down.png" alt="decrease" />
        </button>
      </div>
      <div className="modal-footer">
        <button className="cancel-btn" onClick={() => setModalOpen(false)}>
          Cancel
        </button>
        <button className="save-btn" onClick={handleSaveAdd}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddModal;
