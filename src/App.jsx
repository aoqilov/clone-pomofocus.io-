import React, { useEffect, useState } from "react";
import Navbar from "./section/Navbar";
import Header from "./section/Header";

const App = () => {
  // LocalStoragedan oldingi malumotlarni olish
  const [threeTime, setThreeTime] = useState(() => {
    const savedTime = localStorage.getItem("threeTime");
    return savedTime
      ? JSON.parse(savedTime)
      : { pomodoro: 1500, short: 300, long: 900 }; // Default qiymatlar
  });
  useEffect(() => {
    localStorage.setItem("threeTime", JSON.stringify(threeTime));
  }, [threeTime]);
  const [mainBgColor, setMainBgColor] = useState("ba4949");
  // pomodoro

  function changeBgColor(color) {
    setMainBgColor(color);
  }

  return (
    <div className="app">
      <div
        className="main-bg"
        style={{ background: `#${mainBgColor}`, transition: "1s all" }}
      >
        <Navbar threeTime={threeTime} setThreeTime={setThreeTime} />
        <Header changeBgColor={changeBgColor} threeTime={threeTime} />
      </div>
    </div>
  );
};

export default App;
