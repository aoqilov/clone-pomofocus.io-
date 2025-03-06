import React, { useEffect, useState } from "react";
import AddModal from "../components/ModalAdd";

const Header = ({ changeBgColor, threeTime }) => {
  const [menuTimer, setMenuTimer] = useState(1);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);
  const [time, setTime] = useState(threeTime.pomodoro);
  const [isRunning, setIsRunning] = useState(false);
  const [modalAddOpen, setModalOpen] = useState(false);
  const [dataEst, setDataEst] = useState([]);
  // settings time

  // soz qisqarishi mobile va desktop uchun
  const timers = isMobile
    ? [
        {
          id: 1,
          label: "Pomodoro",
          color: "ba4949",
          timefocus: threeTime.pomodoro,
        },
        { id: 2, label: "Short", color: "38858a", timefocus: threeTime.short },
        { id: 3, label: "Long", color: "397097", timefocus: threeTime.long },
      ]
    : [
        {
          id: 1,
          label: "Pomodoro",
          color: "ba4949",
          timefocus: threeTime.pomodoro,
        },
        {
          id: 2,
          label: "Short Break",
          color: "38858a",
          timefocus: threeTime.short,
        },
        {
          id: 3,
          label: "Long Break",
          color: "397097",
          timefocus: threeTime.long,
        },
      ];

  useEffect(() => {
    // Agar threeTime o'zgarsa, timer yangilansin

    // ismobile tushurish
    const handleResize = () => {
      setIsMobile(window.innerWidth < 576);
    };
    window.addEventListener("resize", handleResize);
    // interval
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, threeTime, menuTimer]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };
  return (
    <header>
      <div className="container header">
        <div className="timer">
          <div className="timer__menu">
            {timers.map((item) => (
              <h3
                key={item.id}
                className={menuTimer === item.id ? "active" : ""}
                onClick={() => {
                  changeBgColor(item.color);
                  setMenuTimer(item.id);
                  setTime(item.timefocus);
                  setIsRunning(false);
                }}
              >
                {item.label}
              </h3>
            ))}
          </div>
          <div className="timer__time">
            <p>{formatTime(time)}</p>
            <div className="time-btns">
              <button onClick={() => setIsRunning(!isRunning)}>
                {isRunning ? "Pause" : "Start"}
              </button>
              <div
                className={`reload ${isRunning ? "active" : ""}`}
                onClick={() => {
                  changeBgColor("ba4949");
                  setMenuTimer(1);
                  setTime(threeTime.pomodoro);
                  setIsRunning(false);
                }}
              >
                {/* //active */}
                <img
                  src="https://pomofocus.io/icons/next-white3.png"
                  alt="re-icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="tasks">
          <div className="tasks__now">
            <h4>#3</h4>
            <p>Time to focus!</p>
          </div>
          <div className="tasks__menu">
            <p>Tasks</p>
            <div>
              <img
                src="https://pomofocus.io/icons/threedots-white.png"
                alt="icon-menu"
              />
            </div>
          </div>
          <div className="tasks__list">
            {dataEst.map((item) => {
              return (
                <div className="list" key={item.id}>
                  <div className="list-title">
                    {/* left-border */}
                    <span className="left-border active"></span>

                    <span
                      className={`check ${item.check ? "active" : ""}`}
                    ></span>
                    <p>{item.title}</p>
                  </div>
                  <div className="list-options">
                    <p className="big-num">
                      0/<span className="small-num">{item.estnumber}</span>
                    </p>
                    <div className="opt-icon">
                      <img
                        src="https://pomofocus.io/icons/vertical-ellipsis.png"
                        alt="das"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
            {dataEst.length ? (
              <div className="result-table">
                <h4>
                  Pomos <span>0/{dataEst.length}</span>
                </h4>
                <h4>
                  Finish at <span>19:56</span> (0.7h)
                </h4>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="tasks__add" onClick={() => setModalOpen(true)}>
            <img
              src="https://pomofocus.io/icons/plus-circle-white.png"
              alt="adsdsa"
            />
            <p>Add Task</p>
          </div>
          {/* addmodal */}
          <AddModal
            setDataEst={setDataEst}
            modalAddOpen={modalAddOpen}
            setModalOpen={setModalOpen}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
