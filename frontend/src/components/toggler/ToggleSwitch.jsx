import React from "react";
import "./toggle.css";
import DarkThemeSwitchIcon from "../../assets/icon-dark-theme.svg";
import LightThemeSwitchIcon from "../../assets/icon-light-theme.svg";
import "./toggle.css";

import { ToggleContainer } from "./Toggle.styled";

const ToggleSwitch = ({ handleToggle }) => {
  return (
    <>
      <ToggleContainer>
        <img src={LightThemeSwitchIcon} alt="icon light" />
        <label style={{ margin: "0 14px" }} className="switch">
          <input onChange={handleToggle} type="checkbox" />
          <span className="slider round"></span>
        </label>
        <img src={DarkThemeSwitchIcon} alt="icon dark" />
      </ToggleContainer>
    </>
  );
};

export default ToggleSwitch;
