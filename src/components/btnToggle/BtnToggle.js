import React, { useContext } from "react";
import "./btnToggle.scss";
import { ThemeContext } from "../../context/ThemeContext";

function BtnToggle(props) {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <>
      <div onClick={toggleTheme} className="btn-toggle"></div>
    </>
  );
}

export default BtnToggle;
