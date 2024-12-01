import React from "react";
import "./Popup.css";

const Popup = ({ message }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Access Denied</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Popup;
