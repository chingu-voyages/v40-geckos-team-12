import React from "react";
import "./toggle.css";
import DarkThemeSwitchIcon from "../../assets/icon-dark-theme.svg";
import LightThemeSwitchIcon from "../../assets/icon-light-theme.svg";
import "./toggle.css";

const ToggleSwitch = ({ handleToggle }) => {
  return (
    <>
      <div
        style={{
          borderRadius: "6px",
          background: "#F4F7FD",
          position: "absolute",
          bottom: "88px",
          width: "251px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={LightThemeSwitchIcon} alt="icon light" />

        <label style={{ margin: "0 14px" }} className="switch">
          <input onChange={handleToggle} type="checkbox" />
          <span className="slider round"></span>
        </label>
        <img src={DarkThemeSwitchIcon} alt="icon dark" />
      </div>
    </>
  );
};

export default ToggleSwitch;
