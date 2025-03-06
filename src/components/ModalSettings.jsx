import React, { useState } from "react";

const ModalSettings = ({ threeTime, setThreeTime, setIsOpen }) => {
  const [tempTime, setTempTime] = useState({
    pomodoro: threeTime.pomodoro / 60,
    short: threeTime.short / 60,
    long: threeTime.long / 60,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTempTime((prev) => ({
      ...prev,
      [name]: value === "" ? "" : Number(value), // Agar bo‘sh bo‘lsa, saqlab qo‘yish
    }));
  };

  const handleSave = () => {
    setThreeTime({
      pomodoro: tempTime.pomodoro * 60,
      short: tempTime.short * 60,
      long: tempTime.long * 60,
    });

    localStorage.setItem("threeTime", JSON.stringify(threeTime)); // LocalStorage ga yozish
    setIsOpen(false); // Modalni yopish
  };

  return (
    <div className="settings-modal">
      <div className="settings">
        <div className="settings__header">
          <h2>SETTING</h2>
          <button onClick={() => setIsOpen(false)}>&times;</button>
        </div>
        <div className="settings__body">
          <h4> TIMER</h4>
          <p>Time minutes</p>
          <div className="settings__inputs">
            <div className="settings__input">
              <label>Pomodoro</label>
              <input
                type="number"
                min={0}
                name="pomodoro"
                value={tempTime.pomodoro}
                onChange={handleChange}
              />
            </div>
            <div className="settings__input">
              <label>Short Break</label>
              <input
                type="number"
                name="short"
                value={tempTime.short}
                onChange={handleChange}
              />
            </div>
            <div className="settings__input">
              <label>Long Break</label>
              <input
                type="number"
                name="long"
                value={tempTime.long}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="settings__btns">
            <button onClick={() => setIsOpen(false)}>cancel</button>
            <button onClick={handleSave}>save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSettings;
