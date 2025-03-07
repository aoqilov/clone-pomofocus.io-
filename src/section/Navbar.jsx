import React, { useState } from "react";
import ModalSettings from "../components/ModalSettings.jsx";

const Navbar = ({ threeTime, setThreeTime }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar__box">
        <a href="#!" className="logo-box">
          <img
            src="https://pomofocus.io/images/icon-white2.png"
            alt="icon-logo"
          />
          Pomofocus
        </a>
        {/*  */}
        <div className="box-tools">
          <div className="tool">
            <img
              src="https://pomofocus.io/icons/graph-white.png"
              alt="btn-logo"
            />
            <p>Report</p>
          </div>
          <div className="tool" onClick={() => setIsOpen(true)}>
            <img
              src="https://pomofocus.io/icons/config-white.png"
              alt="btn-logo"
            />
            <p>Settings</p>
          </div>
          <div className="tool">
            <img
              src="https://pomofocus.io/icons/user-white.png"
              alt="btn-logo"
            />
            <p>Sign in</p>
          </div>
          <div className="tool">
            <img
              src="	https://pomofocus.io/icons/threedots-white.png"
              alt="btn-logo"
            />
          </div>
        </div>
      </div>
      <div className="container navbar__border"></div>
      {isOpen && (
        <ModalSettings
          threeTime={threeTime}
          setThreeTime={setThreeTime}
          setIsOpen={setIsOpen}
        />
      )}
    </nav>
  );
};

export default Navbar;
